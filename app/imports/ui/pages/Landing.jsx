import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="align-middle text-center">
      <Col className="d-flex flex-column justify-content-center">
        <h1>Manoa Study Abroad Central</h1>
        <landing-subtitle><i>Your Guide to the World</i></landing-subtitle>
      </Col>
    </Row>
    <center><Image className="landing-image" src="../images/study-abroad-clipart.jpg" /></center>
    <Row>
      <landing-description>Manoa Study Abroad Central is a digital platform dedicated to simplifying the process of choosing a study abroad or exchange program at UH Manoa.
        Since the programs listed below offer different types of experiences, it can be hard for students to determine which study abroad program is best for their
        wants and needs. This site aims to clarify program details and provide clear comparisons to assist students in making informed decisions about their
        international educational experiences.
      </landing-description>
    </Row>
    <Row>
      <Col>
        <Image className="logos" src="../images/mix-logo.png" />
      </Col>
      <Col>
        <Image className="logos" src="../images/nse-logo.png" />
      </Col>
      <Col>
        <Image className="logos" src="../images/sac-logo.png" />
      </Col>
    </Row>
  </Container>
);

export default Landing;
