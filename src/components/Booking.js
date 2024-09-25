import React, { useState, useEffect } from 'react';
import './Booking.css';
import emailjs from '@emailjs/browser';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Modal.css'; // Import the new modal CSS file here
import logo from './logo.png'; // Import your company logo
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import Modal from './Modal'; // Import the Modal component

// Define Google Maps libraries to use
const libraries = ['places'];

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 51.8979, // Latitude for Cheltenham
  lng: -2.0783, // Longitude for Cheltenham
};

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupLocation: '',
    destination: '',
    date: new Date(),
    time: '', // Changed time initial state to an empty string
    message: '',
    service: 'Business Chauffeur Service',
    fleet: 'Mercedes S-Class',
  });

  const [map, setMap] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC_FgvzmuBhXXOkRcZFfeP6QVXOihRcPzE',
    libraries,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      date,
    }));
  };

  const handleTimeChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      time: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      phone: formData.phone,
      email: formData.email,
      pickup_location: formData.pickupLocation,
      destination: formData.destination,
      date: formData.date.toLocaleDateString(),
      time: formData.time,
      service: formData.service,
      fleet: formData.fleet,
      message: formData.message,
    };

    emailjs
      .send(
        'service_ovutqli',
        'template_egyq1dr',
        templateParams,
        'Js6NpYzvlfe8Vdtz2'
      )
      .then(
        (result) => {
          console.log('Email successfully sent:', result.text);

          // Open modal after successful submission
          setIsModalOpen(true);
        },
        (error) => {
          console.error('Email sending failed:', error);
          alert('Failed to send email, please try again.');
        }
      );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Adding basic meta tags for SEO
    document.title = 'Book Your Chauffeur Service | Cheltenham Chauffeurs';
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="booking-container">
      {/* SEO meta tags */}
      <Helmet>
        <title>Book Your Chauffeur Service - Cheltenham Chauffeurs</title>
        <meta
          name="description"
          content="Book your premium chauffeur service in Cheltenham, UK. We offer luxury Mercedes fleet services for business trips, airport transfers, and special events."
        />
        <meta
          name="keywords"
          content="Cheltenham Chauffeur, Chauffeur Service, Business Chauffeur, Airport Transfer, Luxury Car Service, Mercedes Chauffeur"
        />
        <meta name="author" content="Cheltenham Chauffeurs" />
      </Helmet>

      <div className="booking-box">
        {/* Company Logo */}
        <img src={logo} alt="Cheltenham Chauffeurs Logo" className="booking-logo" />

        {/* Title */}
        <h1 className="booking-title">Book Your Chauffeur</h1>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          {/* Normal Text Fields for Pickup Location */}
          <div className="form-group">
            <label htmlFor="pickupLocation">Pickup Location:</label>
            <input
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
              placeholder="Enter pickup location"
            />
          </div>

          {/* Normal Text Fields for Destination */}
          <div className="form-group">
            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              placeholder="Enter destination"
            />
          </div>

          {/* Date Picker */}
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              dateFormat="MMMM d, yyyy"
              required
            />
          </div>

          {/* Time Picker */}
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleTimeChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Select Service:</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="Business Chauffeur Service">Business Chauffeur Service</option>
              <option value="Airport Transfer">Airport Transfer</option>
              <option value="Cotswolds Tours">Cotswolds Tours</option>
              <option value="Wedding Car Service">Wedding Car Service</option>
              <option value="Special Events Chauffeur Service">Special Events Chauffeur Service</option>
              <option value="Courier Services">Courier Services</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="fleet">Select Fleet:</label>
            <select
              id="fleet"
              name="fleet"
              value={formData.fleet}
              onChange={handleChange}
              required
            >
              <option value="Mercedes S-Class">Mercedes S-Class</option>
              <option value="Mercedes E-Class">Mercedes E-Class</option>
              <option value="Mercedes V-Class">Mercedes V-Class</option>
              <option value="Standard Car">Standard Car</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Additional Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any additional requests or information (Optional)"
            ></textarea>
          </div>

          <button type="submit" className="btn-booking">Confirm Booking</button>
        </form>

        {/* Google Maps (Cheltenham, UK) */}
        <div style={{ marginTop: '20px' }}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={12}
            onLoad={(map) => setMap(map)}
          />
        </div>

        {/* Modal component usage */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>

      {/* SEO-related hidden content */}
      <div className="visually-hidden">
        <h1>Book Cheltenham Chauffeurs</h1>
        <h2>Chauffeur Booking Services for Airport Transfers, Business Travel, and Events</h2>
        <p>
          Book our executive chauffeur services in Cheltenham for business travel, airport transfers, and special events. We offer a fleet of luxury cars, including Mercedes S-Class, E-Class, and V-Class, for your travel needs in Gloucestershire.
        </p>
        <ul>
          <li>Cheltenham Chauffeurs booking</li>
          <li>Airport transfers Cheltenham</li>
          <li>Luxury chauffeur services Cheltenham</li>
          <li>Business travel chauffeur Cheltenham</li>
          <li>Executive travel booking Cheltenham</li>
          <li>Mercedes chauffeur hire Cheltenham</li>
          <li>Wedding car hire Cheltenham</li>
          <li>Special events chauffeur service Cheltenham</li>
        </ul>
      </div>
    </div>
  );
};

export default Booking;
