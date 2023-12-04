import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-dark text-white">
    <div className="container">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img
            src="https://manoa.hawaii.edu/wp/wp-content/uploads/2017/10/uhm-white-seal-nameplate@2x.png"
            alt="University of Hawaii at Manoa Seal"
            style={{ maxWidth: '56%', height: 'auto', marginLeft: '-170px', marginTop: '-30px ' }}
          />
        </div>
        <div className="col-md-4 flex-column justify-content-start" style={{ marginLeft: '9%' }}>
          <h3>Address</h3>
          <p>2500 Campus Rd<br />University of Hawaii at Manoa<br />Honolulu, HI, 96822</p>
        </div>
        <div className="col-md-4 flex-column justify-content-end" style={{ marginLeft: '80%', marginTop: '-129px' }}>
          <h3>Contact Us</h3>
          <p>(808) 956-8111<br />MSAC@hawaii.edu </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
