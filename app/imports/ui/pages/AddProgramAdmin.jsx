import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Programs } from '../../api/program/Program';

// Component for adding new posts to the database
const formSchema = new SimpleSchema({
  school: {
    type: String,
    defaultValue: '',
  },
  country: {
    type: String,
    // eslint-disable-next-line max-len
    allowedValues: ['Australia', 'Canada', 'China', 'Czech Republic', 'Denmark', 'Fiji', 'Finland', 'France', 'French Polynesia', 'Germany', 'Hong Kong', 'Indonesia', 'Italy', 'Japan', 'Korea', 'Malaysia', 'Morocco', 'Netherlands', 'New Zealand', 'Norway', 'Philippines', 'Singapore', 'Spain', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'United Kingdom', 'United States'],
    defaultValue: 'Australia',
  },
  description: String,
  image: String,
  site: {
    type: String,
    allowedValues: ['Manoa International Exchange (MIX)', 'Study Abroad Center', 'National Student Exchange (NSE)'],
    defaultValue: 'Manoa International Exchange (MIX)',
  },
  url: {
    type: String,
    defaultValue: '',
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddPost = () => {
  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { school, country, description, image, site, url } = data;
    Programs.collection.insert(
      { school, country, description, image, site, url },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Post added successfully!', 'success');
          formRef.reset();
        }
      },
    );
  };

  let fRef = null;

  return (
    <Container id="addprogramadmin-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Add Study Abroad Program Here</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField id="addprogramadmin-school" name="school" placeholder="School Name" />
                <SelectField id="addprogramadmin-country" name="country" />
                <LongTextField id="addprogramadmin-description" name="description" placeholder="Enter description" />
                <TextField id="addprogramadmin-image" name="image" placeholder="Image URL" />
                <SelectField id="addprogramadmin-site" name="site" />
                <TextField id="addprogramadmin-url" name="url" placeholder="link to program on site" />
                <SubmitField id="addpost-submit" value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPost;
