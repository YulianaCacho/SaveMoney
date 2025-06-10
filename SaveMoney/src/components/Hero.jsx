import React from 'react';

export default function Hero() {
  return (
    <section className="container my-5" id="inicio">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-4 fw-bold">
            Organiza tus <br /> Finanzas con <br /> SaveMoney
          </h1>
          <div style={{ width: '150px', height: '64px', backgroundImage: 'url("/compass.png")', backgroundSize: 'cover' }} className="rounded-pill my-3 mx-auto mx-md-0"></div>
          <div className="d-flex gap-3 justify-content-center justify-content-md-start">
            <button className="btn btn-primary btn-lg rounded-pill">Descargar Ahora</button>
            <button className="btn btn-outline-primary btn-lg rounded-pill">Más Información</button>
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <img src="/team-laptop.jpg" alt="Equipo trabajando" className="img-fluid rounded-4 shadow" />
        </div>
      </div>
    </section>
  );
}
