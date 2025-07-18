import React, { useRef, useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import Header from "../../components/Header/Header"
import DrawSignature from "../../components/DrawSignature/DrawSignature"
import "./DocumentView.css"
import BorderColorIcon from "@mui/icons-material/BorderColor"
import VerifiedIcon from "@mui/icons-material/Verified"
import EditNoteIcon from "@mui/icons-material/EditNote"
import PersonIcon from "@mui/icons-material/Person"
import WorkIcon from "@mui/icons-material/Work"
import BusinessIcon from "@mui/icons-material/Business"
import EventIcon from "@mui/icons-material/Event"
import TextFieldsIcon from "@mui/icons-material/TextFields"
import TableChartIcon from "@mui/icons-material/TableChart"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import ImageIcon from "@mui/icons-material/Image"
import EmailIcon from "@mui/icons-material/Email"

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs"

const FIELD_TYPES = [
  { type: "signature", label: "signature", icon: <BorderColorIcon className="dv-field-icon" /> },
  { type: "stamp", label: "stamp", icon: <VerifiedIcon className="dv-field-icon" /> },
  { type: "initials", label: "initials", icon: <EditNoteIcon className="dv-field-icon" /> },
  { type: "name", label: "name", icon: <PersonIcon className="dv-field-icon" /> },
  { type: "jobtitle", label: "job title", icon: <WorkIcon className="dv-field-icon" /> },
  { type: "company", label: "company", icon: <BusinessIcon className="dv-field-icon" /> },
  { type: "date", label: "date", icon: <EventIcon className="dv-field-icon" /> },
  { type: "text", label: "text", icon: <TextFieldsIcon className="dv-field-icon" /> },
  { type: "cells", label: "cells", icon: <TableChartIcon className="dv-field-icon" /> },
  { type: "checkbox", label: "checkbox", icon: <CheckBoxIcon className="dv-field-icon" /> },
  { type: "image", label: "image", icon: <ImageIcon className="dv-field-icon" /> },
  { type: "email", label: "email", icon: <EmailIcon className="dv-field-icon" /> },
]

const SAMPLE_PDF_URL = "/sample.pdf"

function DocumentView() {
  const [theme, setTheme] = useState("primary")
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [showSignaturePopup, setShowSignaturePopup] = useState(false)
  const [signatureURL, setSignatureURL] = useState(null)
  const [signaturePos, setSignaturePos] = useState(null)
  const pdfWrapperRef = useRef()

  // For demonstration, always use the sample PDF
  const pdfUrl = SAMPLE_PDF_URL

  const handlePdfClick = (e) => {
    if (!showSignaturePopup) return
    const rect = pdfWrapperRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setSignaturePos({ x, y })
    setShowSignaturePopup(false)
  }

  const handleOpenSignature = () => {
    setShowSignaturePopup(true)
  }

  const handleSaveSignature = (url) => {
    setSignatureURL(url)
    setShowSignaturePopup(false)
  }

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <div className="document-view-container">
        <h2>Document Viewer</h2>
        <div className="document-main-content">
          <div className="left-panel">
            {Array.from({ length: numPages || 1 }, (_, i) => (
              <div
                key={i + 1}
                className={`thumbnail-preview${pageNumber === i + 1 ? " selected" : ""}`}
                onClick={() => setPageNumber(i + 1)}
              >
                <Document file={pdfUrl} loading="" noData="">
                  <Page pageNumber={i + 1} width={60} loading="" />
                </Document>
              </div>
            ))}
          </div>
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
          <div className="right-panel">
            <button className="right-panel-btn" onClick={handleOpenSignature}>
              Add new signature
            </button>
            <button className="right-panel-btn">Select signature</button>
            <button className="right-panel-btn">Stamp</button>
            <button className="right-panel-btn">Initials</button>
            <button className="right-panel-btn">Name</button>
            <button className="right-panel-btn">Date</button>
            <button className="right-panel-btn">Text</button>
            <button className="right-panel-btn">Cells</button>
            <button className="right-panel-btn">Checkbox</button>
            <button className="right-panel-btn">Image</button>
            <button className="right-panel-btn">Email</button>
          </div>
        </div>
      </div>
      {showSignaturePopup && (
        <DrawSignature onSave={handleSaveSignature} onClose={() => setShowSignaturePopup(false)} />
      )}
    </>
  )
}

export default DocumentView
