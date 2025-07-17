import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import DocumentView from "./pages/DocumentView/DocumentView"
import Dashboard from "./pages/Dashboard"

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/document" element={<DocumentView />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
