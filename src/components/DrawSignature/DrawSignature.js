import React, { useRef } from "react"
import SignatureCanvas from "react-signature-canvas"
import RoundedOutlinedBtn from "../Buttons/RoundedOutlined/RoundedOutlinedBtn"
import "./DrawSignature.css"

function DrawSignature({ onSave, onClose }) {
  const sigCanvasRef = useRef()

  const handleClear = () => {
    sigCanvasRef.current.clear()
  }

  const handleSaveSignature = () => {
    const url = sigCanvasRef.current.getTrimmedCanvas().toDataURL("image/png")
    onSave(url)
  }

  return (
    <div className="draw-signature-popup">
      <div className="draw-signature-content">
        <h3>Draw Your Signature</h3>
        <SignatureCanvas
          penColor="black"
          canvasProps={{ width: 400, height: 150, className: "sig-canvas" }}
          ref={sigCanvasRef}
        />
        <div className="signature-controls">
          <RoundedOutlinedBtn onClick={handleClear}>Clear</RoundedOutlinedBtn>
          <RoundedOutlinedBtn onClick={handleSaveSignature}>Save Signature</RoundedOutlinedBtn>
          <RoundedOutlinedBtn onClick={onClose}>Close</RoundedOutlinedBtn>
        </div>
      </div>
    </div>
  )
}

export default DrawSignature
