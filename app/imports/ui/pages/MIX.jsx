import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';

const MIX = () => (
  <Container id="mix-page" fluid="md" className="my-5">
    <Row className="align-items-center">
      <Col md={6} className="d-flex flex-column">
        <h1>Manoa International Exchange</h1>
        <p style={{ fontSize: '1.35rem' }}>
          Manoa International Exchange (MIX) is a program that demonstrates the University’s commitment to student mobility, international exchange, and global engagement by providing
          compelling opportunities for our undergraduate and graduate students to study on exchange at one of our many partner universities overseas. In
          reciprocity, MIX also welcomes exchange students from these overseas partner universities to study at UHM. Exchange study may be for one or two
          semesters.
        </p>
        <p style={{ fontSize: '1.35rem' }}>
          MIX enables UHM students to go abroad and experience other cultures in safe and supportive environments, and enables international students to
          immerse themselves in the cultural and academic community of the UHM campus and of Hawai’i. UH Mānoa offers a place where students can truly
          “mix” in every sense of the word. Students going to other countries or coming to Hawai’i are vital to the diversity that Mānoa offers. Our campus
          and global community are strengthened by the experiences, ideas, friendships and networks formed by our exchange students.
        </p>
      </Col>
      <Col md={6}>
        <Image src="./images/mix-page-cartoon.jpg" alt="National Exchange" fluid style={{ marginTop: '40px' }} />
        <p style={{ fontStyle: 'italic', fontSize: '1.35rem' }}>Expand Your Horizons!</p>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col className="text-left">
        {/* eslint-disable-next-line max-len */}
        <a href="https://manoa.hawaii.edu/mix/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: 'green', textDecoration: 'none', fontWeight: 'bold' }}>
          <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>→ </span>
          Visit Manoa International Exchange
        </a>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col className="text-left">
        <a href="https://manoa.hawaii.edu/mix/outbound/apply/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: 'green', textDecoration: 'none', fontWeight: 'bold' }}>
          <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>→ </span>
          Application Requirements
        </a>
      </Col>
    </Row>
  </Container>
);

export default MIX;
