import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import ToggleButton from "@mui/material/ToggleButton"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import { useNavigate } from "react-router-dom"

function Header({ theme, setTheme }) {
  const isDark = theme === "secondary"
  const handleThemeToggle = () => {
    setTheme(isDark ? "primary" : "secondary")
    // TODO: Dynamically import and apply theme
  }
  const navigate = useNavigate()

  return (
    <AppBar position="static">
      <Toolbar sx={{ minHeight: 40, paddingLeft: 1, paddingRight: 1 }}>
        <Typography variant="h6" className="grow" sx={{ fontSize: "1.1rem" }}>
          SigniSure
        </Typography>
        <Button
          color="inherit"
          sx={{ minWidth: 32, fontSize: "0.95rem", padding: "4px 8px" }}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </Button>
        <Button color="inherit" sx={{ minWidth: 32, fontSize: "0.95rem", padding: "4px 8px" }}>
          Sign Out
        </Button>
        <ToggleButton
          value="theme"
          selected={isDark}
          onChange={handleThemeToggle}
          sx={{ minWidth: 32, padding: "4px 8px", ml: 1 }}
        >
          {isDark ? <DarkModeIcon /> : <LightModeIcon />}
        </ToggleButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
