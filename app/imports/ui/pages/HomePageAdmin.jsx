import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

/* A simple static component to render some text for the landing page. */
const HomePageAdmin = () => (
  <Container id="adminHome-page" fluid className="py-3">
    <Row className="align-middle text-center">
      <Col className="d-flex flex-column justify-content-center">
        <h1>Manoa Study Abroad Central</h1>
        <landing-subtitle><i>Your Guide to the World</i></landing-subtitle>
      </Col>
    </Row>
    <center><Image className="landing-image" src="../images/study-abroad-clipart.jpg" /></center>
    <Row className="fluid">
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
    <Row className="align-middle text-center">
      <Col className="d-flex flex-column justify-content-center">
        <Row className="py-3">
          <h4>This website has 0 visits in the past 10 days</h4>
        </Row>
        <Row className="py-3">
          <h4>There are {Meteor.users.find().count()} registered users</h4>
        </Row>
        <Row className="py-3">
          <h4>There are currently 0 study abroad programs in the database</h4>
        </Row>
        <Row className="py-3">
          <h4>You have 0 comments awaiting approval</h4>
        </Row>
        <Row className="py-3">
          <h4>You have 0 comments awaiting moderation</h4>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default HomePageAdmin;
