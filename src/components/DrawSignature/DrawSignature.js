import React, { useRef } from "react"
import SignatureCanvas from "react-signature-canvas"
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
        <h3>Draw your signature</h3>
        <SignatureCanvas
          penColor="black"
          canvasProps={{ width: 400, height: 150, className: "sig-canvas" }}
          ref={sigCanvasRef}
        />
        <div className="signature-controls">
          <button onClick={handleClear}>Clear</button>
          <button onClick={handleSaveSignature}>Save Signature</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default DrawSignature
