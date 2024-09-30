import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TermsModal from './TermsModal'; // Import the modal component
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Phone: 07733 954646</p>
            <p>Email: <a href="mailto:info@cheltenhamchauffeur.co.uk" className="text-white">info@cheltenhamchauffeur.co.uk</a></p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/contact" className="text-white">Contact</Link></li> {/* Link to Contact.js */}
              <li><Link to="/booking" className="text-white">Book A Ride</Link></li> {/* Link to Booking.js */}
            </ul>
          </Col>
          <Col md={4}>
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>
                {/* Trigger modal */}
                <TermsModal />
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p className="mb-0">© 2024 Cheltenham Chauffeur. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
