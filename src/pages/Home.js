import React, { useState } from "react"
import "../App.css"
import "./Home.css"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="grow">
            SigniSure
          </Typography>
          <Button color="inherit">Dashboard</Button>
          <Button color="inherit">Documents</Button>
          <Button color="inherit">Sign Out</Button>
        </Toolbar>
      </AppBar>
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
