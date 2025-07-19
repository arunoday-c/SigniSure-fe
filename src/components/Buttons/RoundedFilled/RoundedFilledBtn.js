import React from "react"
import "./RoundedFilledBtn.css"

function RoundedFilledBtn({ children, onClick, style, className = "", ...props }) {
  return (
    <button className={`rounded-filled-btn ${className}`} onClick={onClick} style={style} {...props}>
      {children}
    </button>
  )
}

export default RoundedFilledBtn
