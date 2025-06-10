import React from 'react';

export default function Nav() {
  return (
    <nav className="fixed-top">
        <div className="container">
          <div
            className="
              d-flex 
              justify-content-between 
              align-items-center

              fixed-top custom-nav        /* tu clase propia si la usas */
              bg-dark                     /* el negro base */
              bg-opacity-75               /* 50% de opacidad */
              shadow-sm rounded-3 mx-4 mt-4 px-4 py-2
            "
          >
            {/* Logo */}
            <a className="navbar-brand mb-0" href="#">
              <img src="/public/logo.png" height="30" alt="SaveMoney" />
            </a>

            {/* Links */}
             <ul className="nav">
              {['Inicio','Consejos Financieros','Contacto'].map(text => (
               <li className="nav-item" key={text}>
               <a className="nav-link text-light px-3" href={`#${text.toLowerCase().replace(/\s+/g,'')}`}>
              {text}
               </a>
              </li>
              ))}
            </ul>

            {/* Botón Contáctenos */}
            <a
              href="#"
              className="
                btn 
                btn-outline-light 
                rounded-pill    /* pill → ovalado */
                px-4            /* ancho extra */
              "
            >
              Contáctenos →

            </a>
          </div>
        </div>
      </nav>
  );
}
