// src/App.jsx
import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import OfflineSection from './components/OfflineSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
    
      <Nav />
      <main className="pt-5 mt-3">
        <Hero />
        {/* ... otras secciones ... */}
        <OfflineSection />
      </main>
      <Footer />
    </>
  );
}
