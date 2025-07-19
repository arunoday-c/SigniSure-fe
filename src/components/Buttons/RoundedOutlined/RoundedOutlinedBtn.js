import React from "react"
import "./RoundedOutlinedBtn.css"

function RoundedOutlinedBtn({ children, onClick, style, className = "", ...props }) {
  return (
    <button className={`rounded-outlined-btn ${className}`} onClick={onClick} style={style} {...props}>
      {children}
    </button>
  )
}

export default RoundedOutlinedBtn
