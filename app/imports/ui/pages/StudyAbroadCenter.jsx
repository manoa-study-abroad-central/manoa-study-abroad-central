import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const StudyAbroadCenter = () => (
  <Container id="study-abroad-center-page" fluid="md" className="my-5">
    <Row className="align-items-center">
      <Col md={6}>
        <h1>STUDY ABROAD CENTER</h1>
        {/* eslint-disable-next-line max-len,react/no-unescaped-entities */}
        <p style={{ fontSize: '1.35rem' }}>The University of Hawai‘i at Mānoa (UHM) Study Abroad Center operates under the professional norms of the Office of the Vice Chancellor for Academic Affairs. The Center specializes in creating, administering, and evaluating academic Study Abroad Programs. It focuses on overseas academic program delivery, student health, safety, security, risk assessment, and management, including on-site inspections and program evaluations. The Center also provides training in health, safety, risk, and liability for faculty members. An Advisory Council, appointed by the Mānoa Faculty Senate Executive Committee, oversees and guides key policy and governance issues. The Center's primary responsibility is to meet the intellectual needs of students in line with university policy, encouraging broad participation in its programs.</p>
      </Col>
      <Col md={6}>
        <Image src="https://e-images.juwaistatic.com/2021/02/study_abroad.jpg" alt="Study Abroad" fluid style={{ marginTop: '40px' }} />
        <p style={{ fontStyle: 'italic', fontSize: '1.35rem' }}>Dare to Discover, Dare to Learn and Dare to Understand</p>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col className="text-left">
        {/* eslint-disable-next-line max-len */}
        <a href="https://www.studyabroad.hawaii.edu/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: 'green', textDecoration: 'none', fontWeight: 'bold' }}><span style={{ fontSize: '2rem', fontWeight: 'bold' }}>→</span>Visit Study Abroad Center</a>
      </Col>
    </Row>
  </Container>
);

export default StudyAbroadCenter;
