// src/components/WhatsAppButton.js
import React from 'react';
import './WhatsAppButton.css'; // Import the CSS for styling the button
import whatsapp from './whatsapp.png'; 
const WhatsAppButton = () => {
  return (
    <div className="whatsapp-button">
      <a
        href="https://api.whatsapp.com/send?phone=+447733954646&text=I%20wanna%20book%20a%20chauffeur"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
           src={whatsapp} // Link to the WhatsApp icon
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
