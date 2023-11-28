import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const NationalStudentExchange = () => (
  <Container id="national-student-exchange-page" fluid="md" className="my-5">
    <Row className="align-items-center">
      <Col md={6}>
        <h1>National Student Exchange</h1>
        {/* eslint-disable-next-line max-len */}
        <p style={{ fontSize: '1.35rem' }}>Welcome to the National Student Exchange (NSE) program, where we cultivate academic enrichment, personal exploration, and student development. Our mission is to facilitate accessible collegiate study away experiences among member colleges and universities across the United States, Canada, Guam, Puerto Rico, and the U.S. Virgin Islands.</p>
        {/* eslint-disable-next-line max-len */}
        <p style={{ fontSize: '1.35rem' }}>We firmly believe that adding a collegiate study away experience enhances education and enriches student growth. By participating in NSE, students embark on a transformative journey that goes beyond traditional classroom learning.</p>
        <p style={{ fontSize: '1.35rem' }}>Join us at the National Student Exchange and be part of an academic adventure that expands boundaries, promotes diversity, and creates a global community of lifelong learners.</p>
      </Col>
      <Col md={6}>
        <Image src="./images/NSEMap.png" alt="National Exchange" fluid style={{ marginTop: '40px' }} />
        <p style={{ fontStyle: 'italic', fontSize: '1.35rem' }}>Curiosity is Your Compass!</p>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col className="text-left">
        {/* eslint-disable-next-line max-len */}
        <a href="https://manoa.hawaii.edu/nse/home/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: 'green', textDecoration: 'none', fontWeight: 'bold' }}><span style={{ fontSize: '2rem', fontWeight: 'bold' }}>→</span>Visit National Student Exchange</a>
      </Col>
    </Row>
  </Container>
);

export default NationalStudentExchange;
