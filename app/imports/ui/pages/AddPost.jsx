import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Posts } from '../../api/post/Post';

// Component for adding new posts to the database
const formSchema = new SimpleSchema({
  title: String,
  description: String,
  program: {
    type: String,
    allowedValues: ['Manoa International Exchange (MIX)', 'Study Abroad Center', 'National Student Exchange (NSE)'],
    defaultValue: 'Manoa International Exchange (MIX)',
  },
  name: String,
  countryRegion: {
    type: String,
    // eslint-disable-next-line max-len
    allowedValues: ['Australia', 'Canada', 'China', 'Czech Republic', 'Denmark', 'Fiji', 'Finland', 'France', 'French Polynesia', 'Germany', 'Hong Kong', 'Indonesia', 'Italy', 'Japan', 'Korea', 'Malaysia', 'Morocco', 'Netherlands', 'New Zealand', 'Norway', 'Philippines', 'Singapore', 'Spain', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'United Kingdom'],
    defaultValue: 'Australia',
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddPosts = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { title, program, description, name, countryRegion } = data;
    const owner = Meteor.user().username;
    Posts.collection.insert(
      { title, program, description, name, owner, countryRegion },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Add Posts Here</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="title" placeholder="Enter title" />
                <TextField name="name" placeholder="Enter name" />
                <SelectField name="program" />
                <SelectField name="countryRegion" />
                <LongTextField name="description" placeholder="Enter description" />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPosts;
