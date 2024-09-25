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
            Our payment terms are: 100% payment at the time of booking.
          </p>
          <p>
            The booking can be subject to additional car park charges and waiting time.
          </p>
          <p>
            The price includes 30 minutes of Parking and Waiting time at any given airport after the flight has landed.
          </p>
          <p>
            If the booking is cancelled within 24 hours from the starting time of hire, 100% of all payment is non-refundable.
          </p>
          <p>
            Any variations to the agreed journey will be charged extra accordingly.
          </p>
          <p>
            If the client fails to appear at the time and place designated as the pickup point, all payments made are non-refundable.
          </p>
          <p>
            Whilst punctuality is key for us, we will not be held responsible for delays caused due to circumstances beyond our control, such as traffic delays, road works etc.
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
          <p>
            Our chauffeurs will travel by the best possible route according to their judgement, unless instructed otherwise by the customer.
          </p>
          <p>
            All our vehicles are fully insured for private hire and reward. However, the client’s property is entirely at their own risk and we shall not be held liable for any damage or loss to any such property left in the vehicle.
          </p>
          <p>
            If any item is left by the client in the car at point of dismemberment and the chauffeur has departed, we will either store it in our office and the client may collect it. If the chauffeur is required to return to your address to return the item, this will be charged at an additional booking rate.
          </p>
          <p>
            We reserve the right to refuse to transport any client who is understood to be under the influence of alcohol or drugs and/or whose behaviour is likely to pose a threat to either the chauffeur, any fellow passenger, or the public.
          </p>
          <p>
            We maintain a strict no-smoking policy in all our vehicles.
          </p>
          <p>
            General quotations do not allow for public holidays, such as Christmas or New Year’s Eve, when there may be additional surcharge. Please inform us if the proposed booking falls on a bank holiday or any other special date.
          </p>
          <p>
            Your statutory rights are not affected by our Terms and Conditions.
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
