import React from 'react';

export default function Hero() {
  return (      
  <header className="pt-5 mt-3">
  <div className="container">
    <div className="row align-items-center">
      {/* Texto */}
      <div className="col-md-6">
        <h1 className="display-4 fw-bold">
          Organiza tus<br/>
          Finanzas con<br/>
          <span className="text-primary">SaveMoney</span>
        </h1>
        <p className="lead mt-3">
          La app peruana que te ayuda a controlar tus ingresos y gastos de manera fácil y efectiva. ¡Empieza hoy!
        </p>
        <div className="mt-4">
          <a href="#" className="btn btn-primary me-3">Descargar Ahora</a>
          <a href="#" className="btn btn-outline-primary">Más Información</a>
        </div>
      </div>
      {/* Imagen */}
      <div className="col-md-6 text-center">
        <img src="/Hero.png" alt="App en uso" className="img-fluid rounded" />
      </div>
    </div>
  </div>
</header>
  );
}