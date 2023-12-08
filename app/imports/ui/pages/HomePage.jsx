import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { JournalBookmark, ChatLeftQuoteFill, AirplaneFill, Building } from 'react-bootstrap-icons';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <div id="homepage">
    <Container fluid>
      <Row>
        <h1 id="welcome" style={{ paddingTop: '100px' }}><strong>WELCOME TO</strong></h1>
        <h1 id="welcome"><strong>MANOA STUDY ABROAD CENTRAL</strong></h1>
      </Row>
      <Row>
        <Col xs={5} id="welcome-description">
          Manoa Study Abroad Central is a digital platform dedicated to simplifying the process of choosing a study abroad or exchange program
          at UH Manoa. Since the different programs offer various types of experiences, it can be hard for students to determine which study
          abroad program is best for their wants and needs. This site aims to clarify program details and provide clear comparisons to assist
          students in making informed decisions about their international educational experiences.
        </Col>
      </Row>
      {/* "Features" */}
      <Row>
        <Col>
          {/* Features and descriptions */}
          <h1 id="landing-title" style={{ paddingTop: '150px' }}>FEATURES</h1>
        </Col>
      </Row>
      {/* Add Posts, Testimonies, Study Abroad Programs, Partner Schools */}
      <Row style={{ marginLeft: '-30px' }}>
        <Col md={3}>
          <Container className="d-flex flex-column align-items-center">
            <div id="features-icons"><JournalBookmark /></div>
            <center><h3 id="logo-heading" style={{ paddingTop: '15px' }}><strong>Add Posts</strong></h3>
              <p id="features-desc">Add a post about your study abroad experience</p>
            </center>
          </Container>
        </Col>
        <Col md={3}>
          <Container className="d-flex flex-column align-items-center">
            <div id="features-icons"><ChatLeftQuoteFill /></div>
            <center><h3 id="logo-heading" style={{ paddingTop: '15px' }}><strong>Testimonials</strong></h3>
              <p id="features-desc">Read personal experiences from previous study abroad students</p>
            </center>
          </Container>
        </Col>
        <Col md={3}>
          <Container className="d-flex flex-column align-items-center">
            <div id="features-icons"><AirplaneFill /></div>
            <center><h3 id="logo-heading" style={{ paddingTop: '15px' }}><strong>Discover Study Abraod Programs</strong></h3>
              <p id="features-desc">Learn more about the different study abroad programs offered at UH Manoa</p>
            </center>
          </Container>
        </Col>
        <Col md={3}>
          <Container className="d-flex flex-column align-items-center">
            <div id="features-icons"><Building /></div>
            <center><h3 id="logo-heading" style={{ paddingTop: '15px' }}><strong>View Partner Schools</strong></h3>
              <p id="features-desc">View information about various partner schools</p>
            </center>
          </Container>
        </Col>
      </Row>
      {/* "Programs" header */}
      <Row>
        <Col>
          <h1 id="landing-title">PROGRAMS</h1>
        </Col>
      </Row>
      {/* Different programs and their descriptions */}
      <Row>
        {/* MIX logo and description */}
        <Col md={4} style={{ paddingBottom: '40px' }}>
          <Container className="d-flex flex-column align-items-center">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <Image id="mix-logo" src="../images/mix-logo-circle.png" />
            <h2 id="logo-heading" style={{ marginRight: '-100px' }}><strong>Manoa International</strong></h2>
            <h2 id="logo-heading" style={{ marginRight: '-100px', paddingTop: '2px' }}><strong>Exchange</strong></h2>
            <Col xs={8}>
              <p id="program-short-desc" style={{ marginRight: '-100px' }}> The Manoa International Exchange (MIX) is a great way for students to experience other cultures and to
                immerse themselves in another country for a semester or a year while paying Manoa tuition. The University of Hawaiʻi at Manoa
                has exchange partners in 20 different countries, some of which include: Australia, Canada, Chile, China, Denmark, Fiji, Germany,
                Korea, New Zealand, and United Kingdom. MIX also offers a summer program for students who are not interested in being abroad for
                a semester or a year.
              </p>
            </Col>
            <Col>
              <a href="https://manoa.hawaii.edu/mix/" id="program-short-desc" style={{ paddingLeft: '95px', fontSize: '22px' }}>MIX Home Page</a>
            </Col>
          </Container>
        </Col>
        {/* NSE logo and description */}
        <Col lg={4}>
          <Container className="d-flex flex-column align-items-center">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <Image id="nse-logo" src="../images/nse-logo-circle.png" />
          </Container>
          <Row>
            <Container className="d-flex flex-column align-items-center">
              <h2 id="logo-heading"><strong>National Student</strong></h2>
              <h2 id="logo-heading" style={{ paddingTop: '2px' }}><strong>Exchange</strong></h2>
              <Col xs={9}>
                <p id="program-short-desc">The National Student Exchange (NSE) Program offers students the opportunity to study for one or two
                  semesters at another institution on the continent. Students pay either the University of Hawaiʻi at Manoa tuition or the
                  resident tuition of the host campus, so the program is a great way to expand your university experience.
                </p>
                <a href="https://nse.org/" id="program-short-desc" style={{ paddingLeft: '105px', fontSize: '22px' }}>NSE Home Page</a>
              </Col>
            </Container>
          </Row>
        </Col>
        {/* SAC logo and description */}
        <Col lg={4}>
          <Container className="d-flex flex-column align-items-center">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <Image id="sac-logo" src="../images/sac-logo-circle.png" />
          </Container>
          <Row>
            <Container className="d-flex flex-column align-items-center">
              <h2 id="logo-heading" style={{ marginLeft: '-100px' }}><strong>Study Abroad</strong></h2>
              <h2 id="logo-heading" style={{ marginLeft: '-100px', paddingTop: '2px' }}><strong>Center</strong></h2>
              <Col xs={9}>
                <p id="program-short-desc" style={{ marginLeft: '-100px' }}>The Study Abroad Center (SAC) has affiliations with Asia, Europe, the Americas, and even Oceania, and these programs offer classes
                  in a variety of subject areas. The UH-Manoa Study Abroad Center holds information sessions throughout the semesters. They also hold
                  Study Abroad Fairs each semester, which bring representatives from each of the travel destinations together for a comprehensive
                  overview of the yearly, semester and summer programs.
                </p>
                <a href="https://www.studyabroad.hawaii.edu/" id="program-short-desc" style={{ paddingLeft: '55px', fontSize: '22px' }}>SAC Home Page</a>
              </Col>
            </Container>
          </Row>
        </Col>
        <div style={{ paddingBottom: '150px' }} />
      </Row>
    </Container>
  </div>
);

export default Landing;
