import React, { useState } from "react"
import "../App.css"
import "./Home.css"
import Header from "../components/Header"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

function Home() {
  const [theme, setTheme] = useState("primary")

  const handleThemeSwitch = async () => {
    if (theme === "primary") {
      setTheme("secondary")
      // TODO: Dynamically import secondary theme and apply
    } else {
      setTheme("primary")
      // TODO: Dynamically import primary theme and apply
    }
  }

  return (
    <>
      <Header />
      <main className="main-content">
        <Typography variant="h4" gutterBottom>
          Welcome to SigniSure
        </Typography>
        <Typography variant="body1">
          This platform allows you to view, manage, and sign documents online. Use the navigation above to get started.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleThemeSwitch}>
          Switch Theme
        </Button>
      </main>
    </>
  )
}

export default Home
