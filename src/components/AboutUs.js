import React from 'react';
import './AboutUs.css';

const aboutItems = [
  {
    icon: 'fas fa-user-tie', // Professional Chauffeur Icon
    title: 'Professional Chauffeur',
    description: 'We provide the highest level of service to ensure that you enjoy your ride.',
  },
  {
    icon: 'fas fa-shield-alt', // Safe & Discreet Icon
    title: 'Safe & Discreet',
    description: 'You can trust us to take care of you and get you to your destination safely.',
  },
  {
    icon: 'fas fa-car', // Clean & Comfortable Car Icon
    title: 'Clean & Comfortable Cars',
    description: 'A modern, luxurious experience in a spotless car both inside and out.',
  },
];

const AboutUs = () => {
  return (
    <section className="about-us-section" id="about">
      <div className="about-us-content">
        {/* Main Title */}
        <h2 className="about-us-title">
          <span className="title-main">Cheltenham</span> <span className="title-highlight">Chauffeur</span>
        </h2>

        {/* Subheading */}
        <h3 className="about-us-subheading">About Us</h3>

        {/* About Us Cards */}
        <div className="about-us-items">
          {aboutItems.map((item, index) => (
            <div key={index} className="about-us-card">
              <i className={`about-us-icon ${item.icon}`}></i>
              <h3 className="about-us-card-title">{item.title}</h3>
              <p className="about-us-card-description">{item.description}</p>
            </div>
          ))}
        </div>

        {/* About Us Text */}
        <div className="about-us-text">
          <p>
            Cheltenham Chauffeur is renowned as the leading executive chauffeur service in Gloucestershire, offering tailored, professional transportation solutions for both business and leisure. With a dedication to excellence, we specialize in business travel, corporate events, Cotswolds tours, and airport transfers to all major UK airports, including Heathrow, Gatwick, and beyond.
          </p>
          <p>
            Our services go beyond standard chauffeur offerings. We cater to wedding transportation, ensuring that your special day is even more memorable with our elegantly presented vehicles, customized with your choice of ribbons and decorations. Whether it’s a corporate event, a family tour of the Cotswolds, or a night out, we guarantee your transportation is handled with the utmost precision and attention to detail.
          </p>
        </div>
      </div>

      {/* SEO-related hidden content */}
      <div className="visually-hidden">
        <h1>About Cheltenham Chauffeurs</h1>
        <h2>Executive Chauffeur Services in Gloucestershire</h2>
        <p>
          Cheltenham Chauffeurs provides professional chauffeur services for airport transfers, business travel, weddings, and private hire in Gloucestershire. Our services cover major UK airports such as Heathrow and Gatwick, and we offer luxury transportation for corporate events and family tours.
        </p>
        <ul>
          <li>Chauffeur services Gloucestershire</li>
          <li>Executive travel Cheltenham</li>
          <li>Airport transfers from Cheltenham to Heathrow</li>
          <li>Wedding chauffeur services</li>
          <li>Luxury car hire Cheltenham</li>
          <li>Cotswolds chauffeur-driven tours</li>
          <li>Business travel and corporate events transportation</li>
          <li>Airport taxi service Cheltenham</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
