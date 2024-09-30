import React, { useState } from 'react';
import './Contact.css';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Replace with your EmailJS details
    const serviceID = 'service_8y01cxd';
    const templateID = 'template_dsnerlb';
    const userID = 'Js6NpYzvlfe8Vdtz2';

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section className="contact-section" id="contact">
      <Helmet>
        <title>Contact Us - Cheltenham Chauffeurs</title>
        <meta
          name="description"
          content="Contact Cheltenham Chauffeurs for luxury chauffeur services in Cheltenham. Reach us via phone or email for business travel, airport transfers, and events."
        />
        <meta
          name="keywords"
          content="Cheltenham Chauffeurs, Contact Chauffeur Services, Luxury Chauffeurs, Airport Transfers, Business Travel Cheltenham"
        />
        <meta name="author" content="Cheltenham Chauffeurs" />
      </Helmet>

      <div className="contact-content">
        {/* Main Title */}
        <h2 className="contact-title">
          <span className="title-main">Contact</span> <span className="title-highlight">Information</span>
        </h2>

        <div className="contact-layout">
          {/* Left Side - Contact Information */}
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <a href="tel:+447733954646">Phone <br /><span>07733 954646</span></a>
            </div>

            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@cheltenhamchauffeur.co.uk">
                Email Address <br />
                <span>info@cheltenhamchauffeur.co.uk</span>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form">
            <h2 className="form-title">Contact Us</h2>
            <p className="form-subtitle">We will get back to you in 1 hour.</p>
            
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>

      {/* SEO-related hidden content */}
      <div className="visually-hidden">
        <h1>Contact Cheltenham Chauffeurs</h1>
        <p>
          Get in touch with Cheltenham Chauffeurs for luxury chauffeur services in Cheltenham, including business travel, airport transfers, and private events. Reach us by phone or email.
        </p>
        <ul>
          <li>Contact Cheltenham Chauffeurs</li>
          <li>Business travel chauffeur services</li>
          <li>Luxury airport transfers Cheltenham</li>
          <li>Private chauffeur hire</li>
          <li>Chauffeur-driven events</li>
          <li>Executive travel Cheltenham</li>
          <li>Luxury car hire</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
