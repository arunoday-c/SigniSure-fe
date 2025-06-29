import React from "react"
import Router from "./router"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import primaryTheme from "./themes/primary"

function App() {
  return (
    <ThemeProvider theme={primaryTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  )
}

export default App
