// src/main.jsx
import './index.css'//  ── Aquí importas tu CSS con .transparent-nav
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
         

// ─── Estilos de Bootstrap ─────────────────────────────
import 'bootstrap/dist/css/bootstrap.min.css'
// ─── (Opcional) Bootstrap Icons si los instalaste ────
import 'bootstrap-icons/font/bootstrap-icons.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)