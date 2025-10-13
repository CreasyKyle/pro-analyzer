import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'   // default export from your Analyzer file
import './index.css'          // Tailwind entry

ReactDOM.createRoot(document.getElementById('root') as 
HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


