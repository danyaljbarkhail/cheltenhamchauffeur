import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for programmatic navigation
import { Helmet } from 'react-helmet'; // Import Helmet for SEO optimization
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 992);
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 992);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (isMobileView) {
      setMenuOpen(!menuOpen);
    }
  };

  // Handle smooth scrolling and navigating to homepage when on another page
  const handleScrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      // If not on homepage, navigate to homepage first
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId); // Delay to allow navigation to homepage first
      }, 100); // Delay of 100ms to ensure the page navigates
    } else {
      scrollToSection(sectionId); // Scroll directly if already on the homepage
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      if (isMobileView) {
        setMenuOpen(false);
      }
    }
  };

  return (
    <>
      {/* SEO meta tags */}
      <Helmet>
        <title>Navigation - Cheltenham Chauffeurs</title>
        <meta name="description" content="Navigate through Cheltenham Chauffeurs website for luxury chauffeur services, fleet information, and booking options." />
        <meta name="keywords" content="Cheltenham Chauffeurs, Navigation, Fleet, Services, Book A Ride, Contact" />
        <meta name="author" content="Cheltenham Chauffeurs" />
      </Helmet>

      <Navbar expand="lg" className="navbar-main fixed-top">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}> {/* Make the logo clickable */}
            <img src="/logo.png" alt="Cheltenham Chauffeurs" className="navbar-logo" />
          </Navbar.Brand>

          <span className="navbar-slogan">Travel Executive Class</span> {/* Not clickable */}

          <div className="navbar-toggler" onClick={toggleMenu}>
            {!menuOpen ? (
              <FaBars className="burger-icon" />
            ) : (
              <FaTimes className="close-icon" />
            )}
          </div>

          <Navbar.Collapse id="basic-navbar-nav" className={menuOpen && isMobileView ? 'show' : ''}>
            <Nav className="mr-auto">
              <Nav.Link onClick={() => handleScrollToSection('home')} className="nav-link">Home</Nav.Link>
              <Nav.Link onClick={() => handleScrollToSection('services')} className="nav-link">Services</Nav.Link>
              <Nav.Link onClick={() => handleScrollToSection('about')} className="nav-link">About Us</Nav.Link>

              {/* Fleet Link */}
              <Nav.Link as={Link} to="/fleet" className="nav-link">
                Fleet
              </Nav.Link>

              <Nav.Link onClick={() => handleScrollToSection('contact')} className="nav-link">Contact</Nav.Link>
            </Nav>
            <div className="navbar-right">
              {/* Book A Ride Button - Navigates to Booking.js page */}
              <Button 
                variant="outline-light" 
                className="book-ride-btn" 
                onClick={() => navigate('/booking')} // Navigate to Booking.js page
              >
                Book A Ride
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* SEO-related hidden content */}
      <div className="visually-hidden">
        <h1>Navigate Cheltenham Chauffeurs Website</h1>
        <p>
          Discover Cheltenham Chauffeurs' luxury chauffeur services, browse our fleet, and easily navigate the website for services, bookings, and more. 
        </p>
        <ul>
          <li>Luxury chauffeur navigation</li>
          <li>Cheltenham Chauffeurs fleet</li>
          <li>Executive chauffeur services navigation</li>
          <li>Book a chauffeur ride</li>
          <li>Contact Cheltenham Chauffeurs</li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
