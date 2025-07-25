import React, { useRef, useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import Header from "../../components/Header/Header"
import DrawSignature from "../../components/DrawSignature/DrawSignature"
import RoundedOutlinedBtn from "../../components/Buttons/RoundedOutlined/RoundedOutlinedBtn"
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
                <div className="thumbnail-inner">
                  <Document file={pdfUrl} loading="" noData="">
                    <Page pageNumber={i + 1} renderTextLayer={false} renderAnnotationLayer={false} />
                  </Document>
                </div>
              </div>
            ))}
          </div>
          <div className="pdf-section">
            <div className="pdf-wrapper" ref={pdfWrapperRef} onClick={handlePdfClick}>
              <Document
                file={pdfUrl}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                className="pdf-document"
                loading=""
                noData=""
              >
                <Page
                  pageNumber={pageNumber}
                  width={500}
                  loading=""
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
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
              <RoundedOutlinedBtn onClick={() => setPageNumber((p) => Math.max(1, p - 1))} disabled={pageNumber <= 1}>
                Previous
              </RoundedOutlinedBtn>
              <span>
                Page {pageNumber} of {numPages || 1}
              </span>
              <RoundedOutlinedBtn
                onClick={() => setPageNumber((p) => Math.min(numPages || 1, p + 1))}
                disabled={pageNumber >= (numPages || 1)}
              >
                Next
              </RoundedOutlinedBtn>
            </div>
          </div>
          <div className="right-panel">
            <RoundedOutlinedBtn className="right-panel-btn" onClick={handleOpenSignature}>
              Add new signature
            </RoundedOutlinedBtn>
            <RoundedOutlinedBtn className="right-panel-btn">Signature</RoundedOutlinedBtn>
            <RoundedOutlinedBtn className="right-panel-btn">Stamp</RoundedOutlinedBtn>
            <RoundedOutlinedBtn className="right-panel-btn">Initials</RoundedOutlinedBtn>
            <RoundedOutlinedBtn className="right-panel-btn">Name</RoundedOutlinedBtn>
            <RoundedOutlinedBtn className="right-panel-btn">Date</RoundedOutlinedBtn>
            <RoundedOutlinedBtn className="right-panel-btn">Text</RoundedOutlinedBtn>
            <RoundedOutlinedBtn className="right-panel-btn">Cells</RoundedOutlinedBtn>
            <RoundedOutlinedBtn className="right-panel-btn">Checkbox</RoundedOutlinedBtn>
            <RoundedOutlinedBtn className="right-panel-btn">Image</RoundedOutlinedBtn>
            <RoundedOutlinedBtn className="right-panel-btn">Email</RoundedOutlinedBtn>
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
