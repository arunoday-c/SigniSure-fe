import React, { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import ToggleButton from "@mui/material/ToggleButton"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import PersonIcon from "@mui/icons-material/Person"
import LockIcon from "@mui/icons-material/Lock"
import LogoutIcon from "@mui/icons-material/Logout"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { useNavigate } from "react-router-dom"
import "./Header.css"

function Header({ theme, setTheme }) {
  const isDark = theme === "secondary"
  const handleThemeToggle = () => {
    setTheme(isDark ? "primary" : "secondary")
    // TODO: Dynamically import and apply theme
  }
  const navigate = useNavigate()

  // Profile menu state
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static">
      <Toolbar className="header-toolbar">
        <Typography variant="h6" className="header-title">
          SigniSure
        </Typography>
        <Button
          color="inherit"
          className="header-btn"
          sx={{ textTransform: "none" }}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </Button>
        <IconButton color="inherit" onClick={handleProfileClick} size="large">
          <AccountCircleIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <LockIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Change password</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Log out</ListItemText>
          </MenuItem>
        </Menu>
        <ToggleButton value="theme" selected={isDark} onChange={handleThemeToggle} className="header-toggle">
          {isDark ? <DarkModeIcon /> : <LightModeIcon />}
        </ToggleButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
