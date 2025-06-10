import React from 'react';

export default function Footer() {
  return (     
    
      <footer className="bg-secondary text-white text-center py-4">
        <p>© 2025 Lourdes Angulo – Yuliana Cacho | Grupo 24</p>
        <div>
          {['Inicio','Consejos Financieros','Contacto','Términos y Condiciones','Preguntas Frecuentes'].map(link => (
            <a key={link} href="#" className="text-white mx-2">{link}</a>
          ))}
        </div>
      </footer>

     );
     
}