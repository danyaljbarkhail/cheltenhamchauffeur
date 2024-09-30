import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const TermsModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" onClick={handleShow} className="terms-link">
        Terms & Privacy
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Terms & Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Terms and Conditions</h4>
          <p>
Please note all reservations are made subject the following:
          </p>
          <p>
Bookings cancelled with less than 24 hours notice will be required to pay the full charge of the journey.
          </p>
          <p>
Any no - shows at the airport or other pick up points will lead to full journey charges plus additional waiting and parking costs.
          </p>
          <p>
Prices quoted for the airport meet and greet service includes 30 minutes of waiting and parking after the flight has landed, thereafter an additional fee will be applied.
          </p>
          <p>
Every effort is made to advise correct departure times, however we will not be held responsible for traffic delays or any other unexpected delays resulting in clients missing a flight, train or meetings etc.
          </p>
          <p>
All our vehicles are fully insured for private hire and reward. However, the client’s property is entirely at their own risk and we shall not be held liable for any damage or loss to any such property left in the vehicle.
          </p>
          <p>
Cheltenham Chauffeur reserves the right to change your vehicle or chauffeur.
          </p>
          <p>
We will always endeavour to use our own vehicles, however, on occasions we may have to use a sub-contractor.
          </p>
          <p>
Any damage caused to the vehicle on hire by the client, internally or externally, will be billed to the client accordingly for repairs and valeting.
          </p>
          <p>
We will never supply your email contact details to any third party, but by emailing us you agree to Cheltenham Chauffeur contacting you by email or any other means.
          </p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TermsModal;
