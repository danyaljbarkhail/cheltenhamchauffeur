import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer component
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Fleet from './components/Fleet';
import Booking from './components/Booking'; // Import the Booking component
import WhatsAppButton from './components/WhatsAppButton'; // Import the WhatsApp button component
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Layout for the main pages with all the sections
const MainLayout = () => (
  <>
    <Navbar />
    <Hero />
    <Services />
    <AboutUs />
    <Testimonials />
    <Contact />
    <Footer />  {/* Add Footer for the main layout as well */}
    <WhatsAppButton />  {/* Add WhatsApp Button */}
  </>
);

// Layout for the Fleet page only (without other sections)
const FleetLayout = () => (
  <>
    <Navbar />
    <Fleet />  {/* Only Fleet component here */}
    <Footer />  {/* Add Footer */}
    <WhatsAppButton />  {/* Add WhatsApp Button */}
  </>
);

// Layout for the Booking page only
const BookingLayout = () => (
  <>
    <Navbar />
    <Booking />  {/* Only Booking component here */}
    <Footer />  {/* Add Footer */}
    <WhatsAppButton />  {/* Add WhatsApp Button */}
  </>
);

function App() {
  return (
    <Routes>
      {/* Main routes with the full layout */}
      <Route path="/" element={<MainLayout />} />
      <Route path="/services" element={<MainLayout />} />
      <Route path="/about" element={<MainLayout />} />
      <Route path="/contact" element={<MainLayout />} />

      {/* Fleet route with separate layout */}
      <Route path="/fleet" element={<FleetLayout />} />

      {/* Booking route with separate layout */}
      <Route path="/booking" element={<BookingLayout />} />
    </Routes>
  );
}

export default App;
