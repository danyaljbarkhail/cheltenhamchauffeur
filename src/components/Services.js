import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import './Services.css';

const services = [
  {
    icon: 'fas fa-briefcase',
    title: 'Business Chauffeur Service',
    description: 'Tailored for corporate travelers worldwide, we ensure smooth transportation for executives to airports, hotels, and conferences.',
  },
  {
    icon: 'fas fa-plane-departure',
    title: 'Airport Chauffeur Service',
    description: 'Comfortable and timely transfers to major UK airports, including Heathrow and Gatwick, ensuring a relaxing journey.',
  },
  {
    icon: 'fas fa-map-marked-alt',
    title: 'Cotswolds Tours',
    description: 'Explore the picturesque landscapes of the Cotswolds with our bespoke chauffeur-driven tours in luxurious comfort.',
  },
  {
    icon: 'fas fa-ring',
    title: 'Wedding Car Service',
    description: 'Arrive in elegance on your big day with our luxurious wedding car service, complete with ribbons and bows.',
  },
  {
    icon: 'fas fa-glass-cheers',
    title: 'Special Events Chauffeur Service',
    description: 'Whether it’s a night out or a corporate event, our chauffeurs ensure you and your guests arrive in style and comfort.',
  },
  {
    icon: 'fas fa-shipping-fast',
    title: 'Courier Services',
    description: 'Fast and reliable courier services for secure transportation of packages and documents, ensuring timely deliveries across the UK.',
  },
];

const images = [
  '/images/service01.jpg',
  '/images/e1.jpg',
  '/images/service02.jpg',
  '/images/s2.jpg',
];

const Services = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Check on initial load
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(imageInterval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextService(),
    onSwipedRight: () => handlePreviousService(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleNextService = () => {
    setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePreviousService = () => {
    setCurrentServiceIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <>
      {/* SEO meta tags */}
      <Helmet>
        <title>Our Services - Cheltenham Chauffeurs</title>
        <meta
          name="description"
          content="Explore a range of luxury chauffeur services offered by Cheltenham Chauffeurs, including business, airport transfers, weddings, and special events."
        />
        <meta
          name="keywords"
          content="Cheltenham Chauffeurs, Business Chauffeur, Airport Transfers, Cotswolds Tours, Wedding Car Service, Courier Services"
        />
        <meta name="author" content="Cheltenham Chauffeurs" />
      </Helmet>

      <section className="services-section" id="services">
        <div className="services-content">
          {/* Left Side - Image */}
          <div className="services-image-container">
            <img
              src={images[currentImageIndex]}
              alt="Chauffeur service"
              className="services-image"
            />
          </div>

          {/* Right Side - Services List */}
          <div className="services-info" {...(isMobileView ? handlers : {})}>
            <h2 className="services-title">
              <span className="title-main">Our</span>{' '}
              <span className="title-highlight">Services</span>
            </h2>

            {isMobileView ? (
              /* Mobile view - Swipeable services */
              <div className="services-items">
                <div className="service-card">
                  <i className={`service-icon ${services[currentServiceIndex].icon}`}></i>
                  <div>
                    <h3 className="service-card-title">{services[currentServiceIndex].title}</h3>
                    <p className="service-card-description">{services[currentServiceIndex].description}</p>
                  </div>
                </div>
                <div className="dots-container">
                  {services.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${currentServiceIndex === index ? 'active' : ''}`}
                    ></span>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop view - Show all services */
              <div className="services-items">
                {services.map((service, index) => (
                  <div key={index} className="service-card">
                    <i className={`service-icon ${service.icon}`}></i>
                    <div>
                      <h3 className="service-card-title">{service.title}</h3>
                      <p className="service-card-description">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SEO-related hidden content */}
      <div className="visually-hidden">
        <h1>Luxury Chauffeur Services - Cheltenham Chauffeurs</h1>
        <p>
          Cheltenham Chauffeurs offers a variety of luxury chauffeur services, including business travel, airport transfers, wedding cars, Cotswolds tours, and special events chauffeur services. Experience premium transportation with highly professional chauffeurs.
        </p>
        <ul>
          <li>Business chauffeur service</li>
          <li>Airport chauffeur service</li>
          <li>Cotswolds tours chauffeur</li>
          <li>Wedding car chauffeur service</li>
          <li>Special events chauffeur service</li>
          <li>Courier services Cheltenham</li>
        </ul>
      </div>
    </>
  );
};

export default Services;
