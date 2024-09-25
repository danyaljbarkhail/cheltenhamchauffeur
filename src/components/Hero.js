import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Hero = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <section className="hero-section" id="home">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Cheltenham Chauffeur</h1> {/* Keeping the latest version with <h1> */}
        <h2 className="subtitle">Travel Executive Class</h2>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <button 
            className="btn-cta" 
            onClick={() => navigate('/booking')} // Navigate to Booking page
          >
            Book Your Chauffeur
          </button>
          <button 
            className="btn-cta" 
            onClick={() => navigate('/fleet')} // Navigate to Fleet page
          >
            Explore Our Fleet
          </button>
        </div>
      </div>

      {/* SEO-related hidden content */}
      <div className="visually-hidden">
        <h1>Cheltenham Chauffeurs - Luxury Chauffeur Services</h1>
        <h2>Airport Transfers, Executive Travel, and Chauffeur Services in Cheltenham</h2>
        <p>
          Welcome to Cheltenham Chauffeurs, your premier choice for luxury chauffeur services, including executive travel, airport transfers, private hire, and corporate event transportation in Cheltenham and surrounding areas.
        </p>
        <ul>
          <li>Cheltenham Chauffeurs</li>
          <li>Chauffeur services</li>
          <li>Luxury airport transfers</li>
          <li>Executive travel in Cheltenham</li>
          <li>Airport taxi Cheltenham</li>
          <li>Corporate event transportation</li>
          <li>V Class chauffeur hire</li>
          <li>E Class chauffeur hire</li>
          <li>S Class luxury chauffeur services</li>
          <li>Private hire cars in Cheltenham</li>
          <li>Business travel Cheltenham</li>
          <li>Chauffeur-driven cars</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
