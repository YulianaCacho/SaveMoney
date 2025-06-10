import React from 'react';

export default function OfflineSection() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        
          {/* Texto centrado */}
          
            <h3>Accede a tu información en cualquier momento</h3>
            <p>Registra tus gastos incluso sin conexión. Ideal para zonas rurales o cuando no tienes datos.</p>
            <ul className="list-unstyled">
              <li><i className="bi bi-cloud-download-fill text-primary me-2"></i>Registro Offline</li>
              <li><i className="bi bi-shield-lock-fill text-primary me-2"></i>Seguridad de Datos</li>
              <li><i className="bi bi-arrow-repeat text-primary me-2"></i>Sincronización Automática</li>
            </ul>
            <p className="mt-3">
              <strong>Sin complicaciones, sólo control:</strong> Hecha para Ti te brinda las herramientas para tomar el control de tu dinero.
            </p>
          </div>
          {/* Imagen a la derecha */}
       
            <img src="/images/offline.png" className="img-fluid rounded" alt="Offline" />
         
       
      
    </section>
  );
}
