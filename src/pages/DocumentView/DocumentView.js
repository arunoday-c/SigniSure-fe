import React, { useRef, useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import SignatureCanvas from "react-signature-canvas"
import Header from "../../components/Header/Header"

import "./DocumentView.css"

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs"

// function useQuery() {
//   return new URLSearchParams(useLocation().search)
// }

const SAMPLE_PDF_URL = "/sample.pdf"

function DocumentView() {
  //   const query = useQuery()
  //   const fileId = query.get("id")
  const [theme, setTheme] = useState("primary")
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [signatureURL, setSignatureURL] = useState(null)
  const [placingSignature, setPlacingSignature] = useState(false)
  const [signaturePos, setSignaturePos] = useState(null)
  const sigCanvasRef = useRef()
  const pdfWrapperRef = useRef()

  // For demonstration, always use the sample PDF
  const pdfUrl = SAMPLE_PDF_URL

  const handleClear = () => {
    sigCanvasRef.current.clear()
    setSignatureURL(null)
  }

  const handleSaveSignature = () => {
    const url = sigCanvasRef.current.getTrimmedCanvas().toDataURL("image/png")
    setSignatureURL(url)
    setPlacingSignature(true)
  }

  const handlePdfClick = (e) => {
    if (!placingSignature) return
    const rect = pdfWrapperRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setSignaturePos({ x, y })
    setPlacingSignature(false)
  }

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <div className="document-view-container">
        <h2>Document Viewer</h2>
        <div className="document-main-content">
          <div className="pdf-section">
            <div className="pdf-wrapper" ref={pdfWrapperRef} onClick={handlePdfClick}>
              <Document file={pdfUrl} onLoadSuccess={({ numPages }) => setNumPages(numPages)} className="pdf-document">
                <Page pageNumber={pageNumber} width={500} />
              </Document>
              {signatureURL && signaturePos && pageNumber === 1 && (
                <img
                  src={signatureURL}
                  alt="Signature"
                  className="signature-img"
                  style={{ left: signaturePos.x, top: signaturePos.y }}
                />
              )}
            </div>
            <div className="pdf-controls">
              <button onClick={() => setPageNumber((p) => Math.max(1, p - 1))} disabled={pageNumber <= 1}>
                Previous
              </button>
              <span>
                Page {pageNumber} of {numPages || 1}
              </span>
              <button
                onClick={() => setPageNumber((p) => Math.min(numPages || 1, p + 1))}
                disabled={pageNumber >= (numPages || 1)}
              >
                Next
              </button>
            </div>
          </div>
          <div className="signature-section">
            <h3>Draw Your Signature</h3>
            <SignatureCanvas
              penColor="black"
              canvasProps={{ width: 300, height: 100, className: "sig-canvas" }}
              ref={sigCanvasRef}
            />
            <div className="signature-controls">
              <button onClick={handleClear}>Clear</button>
              <button onClick={handleSaveSignature}>Save Signature</button>
            </div>
            {placingSignature && <div className="place-signature-info">Click on the PDF to place your signature.</div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default DocumentView
