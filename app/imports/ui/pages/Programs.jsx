import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

// eslint-disable-next-line max-len
const countries = ['Australia', 'Canada', 'China', 'Czech Republic', 'Denmark', 'Fiji', 'Finland', 'France', 'French Polynesia', 'Germany', 'Hong Kong', 'Indonesia', 'Italy', 'Japan', 'Korea', 'Malaysia', 'Morocco', 'Netherlands', 'New Zealand', 'Norway', 'Philippines', 'Singapore', 'Spain', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'United Kingdom'];
const programs = ['Manoa International Exchange (MIX)', 'Study Abroad Center', 'National Student Exchange (NSE)'];

const Programs = () => {

  const [categorySelected, setCategorySelected] = useState('');
  const [optionSelected, setOptionSelected] = useState('');
  const navigate = useNavigate();
  const changeSelectionOption = (event) => {
    const newCategory = event.target.value;
    setCategorySelected(newCategory);

    if (newCategory === 'Program') {
      setOptionSelected(programs[0]);
    } else if (newCategory === 'Country/Region') {
      setOptionSelected(countries[0]);
    }
  };

  const handleOptionChange = (event) => {
    setOptionSelected(event.target.value);
  };

  const handleSearch = () => {
    if (categorySelected === 'Program') {
      if (optionSelected === 'Study Abroad Center') {
        navigate('/StudyAbroadCenter');
      } else if (optionSelected === 'Manoa International Exchange (MIX)') {
        // TODO: navigate to MIX page
        navigate('/MIX');
      } else if (optionSelected === 'National Student Exchange (NSE)') {
        // TODO: navigate to NSE page
        navigate('/NationalStudentExchange');

      }
    }
    if (categorySelected === 'Country/Region') {
      navigate(`/list/country/${optionSelected}`);
    }
  };

  let options = null;
  let title = '';
  if (categorySelected === 'Program') {
    options = programs.map((el) => <option key={el}>{el}</option>);
    title = 'Select Program';
  } else if (categorySelected === 'Country/Region') {
    options = countries.map((el) => <option key={el}>{el}</option>);
    title = 'Select Country/Region';
  }
  return (
    <Container id="programs-page" className="py-3">
      <Row className="justify-content-center">
        <Col>
          <h2 className="text-center">Program Search</h2>
          <center>
            <Card style={{ width: '500px', height: '400px' }}>
              <Card.Body>
                <p style={{ paddingTop: '10px', paddingBottom: '10px', fontFamily: 'sans-serif' }}>Find information by program or country/region.</p>
                <h4 style={{ fontFamily: 'sans-serif' }}>Program or Country/Region</h4>
                <select id="program-type-select" style={{ width: '450px', height: '40px' }} onChange={changeSelectionOption}>
                  <option>Select</option>
                  <option>Program</option>
                  <option>Country/Region</option>
                </select>
                <div style={{ paddingBottom: '50px' }} />
                <h4>{title}</h4>
                <select style={{ width: '450px', height: '40px' }} value={optionSelected} onChange={handleOptionChange}>                {
                  options
                }
                </select>
                <div style={{ paddingBottom: '40px' }} />
                <div className="d-flex justify-content-center">
                  <button id="search-programs-button" type="submit" className="btn mt-2" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </Card.Body>
            </Card>
          </center>
        </Col>
      </Row>
    </Container>
  );
};

export default Programs;
