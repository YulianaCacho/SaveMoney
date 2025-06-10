import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AllySection from "./components/AllySection";
import Benefits from "./components/Beneficios";
import Testimonials from "./components/Testimonios";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white min-vh-100 font-sans">
      <Navbar />
      <Hero />
      <AllySection />
      <Benefits />
      <Testimonials />
      <Footer />
    </div>
  );
}