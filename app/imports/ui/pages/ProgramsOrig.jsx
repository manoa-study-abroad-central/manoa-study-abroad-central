import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import { AutoForm, SelectField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';

// eslint-disable-next-line max-len
const countries = ['Australia', 'Canada', 'China', 'Czech Republic', 'Denmark', 'Fiji', 'Finland', 'France', 'French Polynesia', 'Germany', 'Hong Kong', 'Indonesia', 'Italy', 'Japan', 'Korea', 'Malaysia', 'Morocco', 'Netherlands', 'New Zealand', 'Norway', 'Philippines', 'Singapore', 'Spain', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'United Kingdom'];
const programs = ['Manoa International Exchange (MIX)', 'Study Abroad Center', 'National Student Exchange (NSE)'];

const formSchema = new SimpleSchema({
  countryRegion: {
    type: String,
    allowedValues: countries,
    label: 'Country/Region',
  },
  program: {
    type: String,
    allowedValues: programs,
  },
});


const bridge = new SimpleSchema2Bridge(formSchema);

const Programs = () => {

  const submit = (data) => {
    console.log(data);
  };

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={12} md={4}>
          <h2 className="text-center" style={{ fontFamily: 'Roboto', fontweight: '300px', fontSize: '35px' }}>Program Selection Page </h2>
          <Card style={{ borderRadius: '40px', borderWidth: '3px', borderColor: '#000' }}>
            <Card.Body>
              <h3 className="text-left" style={{ fontWeight: 'bold' }}>Program Selection</h3>
              <hr />
              <AutoForm schema={bridge} onSubmit={submit}>
                <SelectField name="countryRegion" placeholder="Select Country" />
                <SelectField name="program" placeholder="Select Program" />
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn mt-2" style={{ backgroundColor: 'white', color: 'black', borderColor: 'black', borderWidth: '3px', fontWeight: 'bold' }}>
                    Search
                  </button>
                </div>
              </AutoForm>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Programs;
