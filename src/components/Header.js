import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import ToggleButton from "@mui/material/ToggleButton"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import { useNavigate } from "react-router-dom"
import "./Header.css"

function Header({ theme, setTheme }) {
  const isDark = theme === "secondary"
  const handleThemeToggle = () => {
    setTheme(isDark ? "primary" : "secondary")
    // TODO: Dynamically import and apply theme
  }
  const navigate = useNavigate()

  return (
    <AppBar position="static">
      <Toolbar className="header-toolbar">
        <Typography variant="h6" className="header-title">
          SigniSure
        </Typography>
        <Button color="inherit" className="header-btn" onClick={() => navigate("/dashboard")}>
          Dashboard
        </Button>
        <Button color="inherit" className="header-btn">
          Sign Out
        </Button>
        <ToggleButton value="theme" selected={isDark} onChange={handleThemeToggle} className="header-toggle">
          {isDark ? <DarkModeIcon /> : <LightModeIcon />}
        </ToggleButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
