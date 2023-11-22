import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
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
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddPosts = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { title, program, description, name } = data;
    const owner = Meteor.user().username;
    Posts.collection.insert(
      { title, program, description, name, owner },
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
                <TextField name="title" />
                <TextField name="name" />
                <SelectField name="program" />
                <Form.Control as="textarea" rows={3} placeholder="Enter body" name="description" />
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
