import React from 'react';
import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-dark">
    <Container>
      <Col className="text-center">
        University of Hawaii Study Abroad Central
        <br />
        Honolulu, HI 96822
        {' '}
        <br />
        <a href="http://ics-software-engineering.github.io/meteor-application-template-react">
          Template Home
          Page
        </a>
        <br />
        Original Sites:
        {' '}
        <br />
        <a href="https://manoa.hawaii.edu/mix/">
          Manoa International Exchange
        </a>
        {', '}
        <a href="https://www.studyabroad.hawaii.edu/">
          Study Abroad Center
        </a>
        {', '}
        <a href="https://nse.org/">
          National Student Exchange
        </a>
      </Col>
    </Container>
  </footer>
);

export default Footer;
