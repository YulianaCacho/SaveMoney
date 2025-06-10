import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <header className="bg-dark text-white py-3 px-4 d-flex justify-content-between align-items-center shadow">
      <div className="d-flex align-items-center gap-3">
        <div style={{ width: '40px', height: '40px', backgroundImage: 'url("/logo.png")', backgroundSize: 'cover' }}></div>
      </div>
      <nav className="d-none d-md-flex gap-4">
        <a href="#inicio" className="text-white text-decoration-none">Inicio</a>
        <a href="#consejos" className="text-white text-decoration-none">Consejos Financieros</a>
        <a href="#contacto" className="text-white text-decoration-none">Contacto</a>
      </nav>
      <button className="btn btn-light d-flex align-items-center gap-1 rounded-pill">
        Contáctenos <span>&rarr;</span>
      </button>
    </header>
  );
}
