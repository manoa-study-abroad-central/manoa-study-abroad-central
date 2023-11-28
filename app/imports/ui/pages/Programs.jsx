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
        <Col xs={12} md={4}>
          <h2 className="text-center" style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '35px' }}>Program Selection Page</h2>
          <Card style={{ borderRadius: '40px', borderWidth: '3px', borderColor: '#000', width: '425px' }}>
            <Card.Body>
              <h3 className="text-center" style={{ fontWeight: 'bold' }}>Program Selection</h3>
              <hr />
              <h4 style={{ paddingTop: '15px' }}>Program or Country/Region</h4>
              <select id="program-type-select" style={{ width: '375px', height: '40px' }} onChange={changeSelectionOption}>
                <option>Select</option>
                <option>Program</option>
                <option>Country/Region</option>
              </select>
              <div style={{ paddingBottom: '60px' }} />
              <h4>{ title }</h4>
              <select id="program-selection-select" style={{ width: '375px', height: '40px' }}>
                {
                  options
                }
              </select>
              <div style={{ paddingBottom: '40px' }} />
              <div className="d-flex justify-content-center">
                <button id="search-programs-button" type="submit" className="btn mt-2" style={{ backgroundColor: 'white', color: 'black', borderColor: 'black', borderWidth: '3px', fontWeight: 'bold' }}>
                  Search
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Programs;
