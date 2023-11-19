import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// eslint-disable-next-line max-len
const countries = ['Australia', 'Canada', 'China', 'Czech Republic', 'Denmark', 'Fiji', 'Finland', 'France', 'French Polynesia', 'Germany', 'Hong Kong', 'Indonesia', 'Italy', 'Japan', 'Korea', 'Malaysia', 'Morocco', 'Netherlands', 'New Zealand', 'Norway', 'Philippines', 'Singapore', 'Spain', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'United Kingdom'];
const programs = ['Manoa International Exchange (MIX)', 'Study Abroad Center', 'National Student Exchange (NSE)'];

const Programs = () => {

  const [selected, setSelected] = React.useState('');
  const changeSelectionOption = (event) => {
    setSelected(event.target.value);
  };

  let type = null;
  let options = null;
  let title = '';
  if (selected === 'Select') {
    type = null;
  } else if (selected === 'Program') {
    type = programs;
    title = 'Select Program';
  } else if (selected === 'Country/Region') {
    type = countries;
    title = 'Select Country/Region';
  }

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={12} md={4}>
          <h2 className="text-center" style={{ fontFamily: 'Roboto', fontweight: '300px', fontSize: '35px' }}>Program Selection Page </h2>
          <Card style={{ borderRadius: '40px', borderWidth: '3px', borderColor: '#000', width: '425px' }}>
            <Card.Body>
              <h3 className="text-center" style={{ fontWeight: 'bold' }}>Program Selection</h3>
              <hr />
              <h4 style={{ paddingTop: '15px' }}>Program or Country/Region</h4>
              <select style={{ width: '375px', height: '40px' }} onChange={changeSelectionOption}>
                <option>Select</option>
                <option>Program</option>
                <option>Country/Region</option>
              </select>
              <div style={{ paddingBottom: '60px' }} />
              <h4>{ title }</h4>
              <select style={{ width: '375px', height: '40px' }}>
                {
                  options
                }
              </select>
              <div style={{ paddingBottom: '40px' }} />
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn mt-2" style={{ backgroundColor: 'white', color: 'black', borderColor: 'black', borderWidth: '3px', fontWeight: 'bold' }}>
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
