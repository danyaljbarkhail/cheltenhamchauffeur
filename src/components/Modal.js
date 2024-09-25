import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // If the modal isn't open, return null to render nothing.

  // Inline styles for the modal
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999, // Ensure it appears on top of everything else
  };

  const modalStyle = {
    color: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // White background with 90% opacity
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#ff4747', // Purple background
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '20px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#ff2745',
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Booking Confirmation</h2>
        <p>Your booking confirmation has been sent!</p>
        <p>You will be contacted within 30-40 minutes to confirm your booking and pricing.</p>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
