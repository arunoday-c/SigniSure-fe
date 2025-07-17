import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ minHeight: 40, paddingLeft: 1, paddingRight: 1 }}>
        <Typography variant="h6" className="grow" sx={{ fontSize: "1.1rem" }}>
          SigniSure
        </Typography>
        <Button color="inherit" sx={{ minWidth: 32, fontSize: "0.95rem", padding: "4px 8px" }}>
          Dashboard
        </Button>
        <Button color="inherit" sx={{ minWidth: 32, fontSize: "0.95rem", padding: "4px 8px" }}>
          Documents
        </Button>
        <Button color="inherit" sx={{ minWidth: 32, fontSize: "0.95rem", padding: "4px 8px" }}>
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
