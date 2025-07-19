import React, { useRef, useState } from "react"
import Typography from "@mui/material/Typography"
import Header from "../components/Header/Header"
import RoundedFilledBtn from "../components/Buttons/RoundedFilled/RoundedFilledBtn"

function Dashboard() {
  const [theme, setTheme] = useState("primary")
  const fileInputRef = useRef()

  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ]
      if (!allowedTypes.includes(file.type)) {
        alert("Only PDF, DOC, and DOCX files are allowed.")
        e.target.value = ""
        return
      }
      // Handle the uploaded file (e.g., send to backend or show preview)
      alert(`Selected file: ${file.name}`)
    }
  }

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <main className="main-content">
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1">View all your uploaded documents at one place</Typography>
        <RoundedFilledBtn onClick={handleUploadClick}>Upload document</RoundedFilledBtn>
        <input
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </main>
    </>
  )
}

export default Dashboard
