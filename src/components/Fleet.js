import React from 'react';
import './Fleet.css';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO

const fleetData = [
  {
    title: "Standard Car",
    image: "/images/standardClass.jpg",
    description: `The Standard Car category provides flexibility with a variety of vehicles, ensuring both comfort and value. Whether you need a city ride or an airport transfer, any car from our fleet can be assigned to the Standard category, offering a smooth and reliable journey at an affordable price. Enjoy a practical ride tailored to your everyday travel needs.`,
    capacity: "3 baggage / 3 passengers",
  },
  {
    title: "Mercedes E-Class",
    image: "/images/e1.jpg",
    description: `Mercedes E Class is the perfect executive chauffeur car, often loved for its versatility as a great Uk airports chauffeur car, seaport chauffeur car hire or for a business person requiring an effortlessly smart executive chauffeur car hire for a business meeting in London or UK Wide. Chauffeur driven Mercedes E Class is regarded as the business class chauffeur driven car of choice, which guarantees the high quality one would expect from Mercedes.`,
    capacity: "3 baggage / 3 passengers",
  },
  {
    title: "Mercedes S-Class",
    image: "/images/s2.jpg",
    description: `Our Mеrсеdеѕ S-Class chauffeur cars аrе trulу luxuriоuѕ аnd stylish limоuѕinеѕ dеѕignеd to offer a comfortable аnd spacious еxреriеnсе ооzing luxurу inѕidе and оut. For safe сhаuffеur-drivеn jоurnеуѕ, the S Clаѕѕ is hard tо beat. It’ѕ timе tо wаkе uр tо a nеw еrа of chauffeur drivеn, in thе utmоѕt comfort and аwе-inѕрiring style.`,
    capacity: "3 baggage / 3 passengers",
  },
  {
    title: "Mercedes V-Class",
    image: "/images/v2.jpg",
    description: `Our сhаuffеurеd Mercedes V Clаѕѕ реорlе саrriеrѕ оffеr a comfortable аnd ѕрасiоuѕ еxреriеnсе. The Mеrсеdеѕ V Clаѕѕ iѕ thе hеight оf versatility, with аmрlе ѕрасе fоr up tо 7 реорlе аnd 7 pieces оf luggаgе. It’s great for business travel, airport transfers, and luxury evening hire.`,
    capacity: "7 baggage / 7 passengers",
  }
];

const pricingData = [
  {
    destination: "Cheltenham To LHR All Terminals",
    standardPrice: "£210",
    eClassPrice: "£225",
    sClassPrice: "£270",
    vClassPrice: "£270"
  },
  {
    destination: "Cheltenham To Central London",
    standardPrice: "£255",
    eClassPrice: "£270",
    sClassPrice: "£295",
    vClassPrice: "£295"
  },
  {
    destination: "Cheltenham To Gatwick",
    standardPrice: "£305",
    eClassPrice: "£320",
    sClassPrice: "£370",
    vClassPrice: "£370"
  },
  {
    destination: "Cheltenham To Luton",
    standardPrice: "£260",
    eClassPrice: "£275",
    sClassPrice: "£315",
    vClassPrice: "£315"
  },
  {
    destination: "Cheltenham To Birmingham Airport",
    standardPrice: "£110",
    eClassPrice: "£125",
    sClassPrice: "£175",
    vClassPrice: "£175"
  },
  {
    destination: "Cheltenham To Bristol",
    standardPrice: "£110",
    eClassPrice: "£125",
    sClassPrice: "£175",
    vClassPrice: "£175"
  }
];

const additionalPricingData = [
  {
    service: "Day Tours (per hour, min 6 hours)",
    standardPrice: "£45",
    eClassPrice: "£60",
    sClassPrice: "£75",
    vClassPrice: "£75",
    courierServicesPrice: "" // Blank for Day Tours
  },
  {
    service: "Per Mile Charge",
    standardPrice: "£2.40",
    eClassPrice: "£2.60",
    sClassPrice: "£3.00",
    vClassPrice: "£3.00",
    courierServicesPrice: "£2.40" // Price for Courier Services
  }
];

const Fleet = () => {
  return (
    <section className="fleet-section">

      {/* SEO meta tags */}
      <Helmet>
        <title>Luxury Fleet - Cheltenham Chauffeurs</title>
        <meta name="description" content="Explore our luxury fleet at Cheltenham Chauffeurs, featuring the Mercedes S-Class, E-Class, V-Class, and Standard Car. Perfect for airport transfers, business travel, and special events." />
        <meta name="keywords" content="Cheltenham Chauffeurs, Luxury Cars, Mercedes Chauffeur, Business Chauffeur, Airport Transfer, Standard Car, Executive Car Hire" />
        <meta name="author" content="Cheltenham Chauffeurs" />
      </Helmet>


      <h2 className="fleet-title">
        <span className="title-main">Our</span> <span className="title-highlight">Fleet</span>
      </h2>

      {/* Fleet Classes Section */}
      {fleetData.map((fleet, index) => (
        <div key={index} className="fleet-item">
          <div className="fleet-image-container">
            <img src={fleet.image} alt={fleet.title} className="fleet-image" />
          </div>
          <div className="fleet-details-container">
            <h3 className="fleet-class-title">{fleet.title}</h3>
            <p className="fleet-description">{fleet.description}</p>
            <div className="fleet-capacity">
              <i className="fas fa-suitcase-rolling"></i> Capacity: {fleet.capacity}
            </div>
          </div>
        </div>
      ))}

      {/* Pricing Section */}
      {/* 
      <section className="pricing-section">
        <h2 className="pricing-title">
          <span className="title-main">Fleet</span> <span className="title-highlight">Pricing</span>
        </h2>
        <div className="pricing-table">
          <div className="pricing-header">
            <div className="pricing-destination">Destination</div>
            <div className="pricing-standard-class">Standard Price</div>
            <div className="pricing-e-class">E Class Price</div>
            <div className="pricing-s-class">S Class Price</div>
            <div className="pricing-v-class">V Class Price</div>
          </div>
          {pricingData.map((price, index) => (
            <div key={index} className="pricing-row">
              <div className="pricing-destination">{price.destination}</div>
              <div className="pricing-standard-class">{price.standardPrice}</div>
              <div className="pricing-e-class">{price.eClassPrice}</div>
              <div className="pricing-s-class">{price.sClassPrice}</div>
              <div className="pricing-v-class">{price.vClassPrice}</div>
            </div>
          ))}
        </div>

        {/* Additional Pricing Section */}
        {/* <div className="additional-pricing">
          <h2 className="pricing-title">
            <span className="title-main">Additional</span> <span className="title-highlight">Pricing</span>
          </h2>
          <div className="pricing-table">
            <div className="pricing-header">
              <div className="pricing-destination">Service</div>
              <div className="pricing-standard-class">Standard Price</div>
              <div className="pricing-e-class">E Class Price</div>
              <div className="pricing-s-class">S Class Price</div>
              <div className="pricing-v-class">V Class Price</div>
              <div className="pricing-courier-services">Courier Services Price</div>
            </div>
            {additionalPricingData.map((price, index) => (
              <div key={index} className="pricing-row">
                <div className="pricing-destination">{price.service}</div>
                <div className="pricing-standard-class">{price.standardPrice}</div>
                <div className="pricing-e-class">{price.eClassPrice}</div>
                <div className="pricing-s-class">{price.sClassPrice}</div>
                <div className="pricing-v-class">{price.vClassPrice}</div>
                <div className="pricing-courier-services">{price.courierServicesPrice}</div>
              </div>
            ))}
          </div>
        </div> */}
      {/* </section> */}
      {/* </section> */}
      {/* )} */}

      {/* Additional Pricing Section */}
      {/* 
      <div className="additional-pricing">
        <h2 className="pricing-title">
          <span className="title-main">Additional</span> <span className="title-highlight">Pricing</span>
        </h2>
        <div className="pricing-table">
          <div className="pricing-header">
            <div className="pricing-destination">Service</div>
            <div className="pricing-standard-class">Standard Price</div>
            <div className="pricing-e-class">E Class Price</div>
            <div className="pricing-s-class">S Class Price</div>
            <div className="pricing-v-class">V Class Price</div>
            <div className="pricing-courier-services">Courier Services Price</div>
          </div>
          {additionalPricingData.map((price, index) => (
            <div key={index} className="pricing-row">
              <div className="pricing-destination">{price.service}</div>
              <div className="pricing-standard-class">{price.standardPrice}</div>
              <div className="pricing-e-class">{price.eClassPrice}</div>
              <div className="pricing-s-class">{price.sClassPrice}</div>
              <div className="pricing-v-class">{price.vClassPrice}</div>
              <div className="pricing-courier-services">{price.courierServicesPrice}</div>
            </div>
          ))}
        </div>
      </div>
      */}
      
      {/* SEO-related hidden content */}
      <div className="visually-hidden">
        <h1>Luxury Fleet - Cheltenham Chauffeurs</h1>
        <p>
          Discover the luxury fleet available at Cheltenham Chauffeurs, featuring the Mercedes S-Class, E-Class, V-Class, and Standard Car for your executive travel, business meetings, airport transfers, and private hire needs.
        </p>
        <ul>
          <li>Mercedes S-Class chauffeur</li>
          <li>Mercedes E-Class chauffeur</li>
          <li>Mercedes V-Class chauffeur</li>
          <li>Standard car hire Cheltenham</li>
          <li>Executive travel chauffeur</li>
          <li>Airport transfer chauffeur</li>
          <li>Business travel chauffeur</li>
          <li>Luxury car hire Cheltenham</li>
        </ul>
      </div>
    </section>
  );
};

export default Fleet;
