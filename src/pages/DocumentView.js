import React from "react"
import { useLocation } from "react-router-dom"
import "./DocumentView.css"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function DocumentView() {
  const query = useQuery()
  const fileId = query.get("id")

  return (
    <div className="document-view-container">
      <h2>Document Viewer</h2>
      {fileId ? (
        <p>
          Viewing document with ID: <strong>{fileId}</strong>
        </p>
      ) : (
        <p>No document ID provided in query params.</p>
      )}
    </div>
  )
}

export default DocumentView
