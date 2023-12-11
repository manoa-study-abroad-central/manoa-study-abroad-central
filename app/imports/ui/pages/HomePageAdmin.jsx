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
