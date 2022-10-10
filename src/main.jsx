import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './pages/App'
import './index.css'

// import { Router } from 'react-router-dom'
import Router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
    {/* <App /> */}
  </React.StrictMode>
)
