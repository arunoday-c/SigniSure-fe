import React, { useState } from "react"
import "../../App.css"
import "./Home.css"
import Header from "../../components/Header/Header"
import Typography from "@mui/material/Typography"

function Home() {
  const [theme, setTheme] = useState("primary")

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <main className="main-content">
        <Typography variant="h4" gutterBottom>
          Welcome to SigniSure
        </Typography>
        <Typography variant="body1">
          This platform allows you to view, manage, and sign documents online. Use the navigation above to get started.
        </Typography>
      </main>
    </>
  )
}

export default Home
