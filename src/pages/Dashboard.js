import React, { useState } from "react"
import Typography from "@mui/material/Typography"
import Header from "../components/Header/Header"

function Dashboard() {
  const [theme, setTheme] = useState("primary")
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <main className="main-content">
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1">View all your documents in one place</Typography>
      </main>
    </>
  )
}

export default Dashboard
