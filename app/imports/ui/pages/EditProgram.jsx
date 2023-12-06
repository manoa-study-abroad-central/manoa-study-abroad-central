import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Programs } from '../../api/program/Program';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(Programs.schema);

/* Renders the EditStuff page for editing a single document. */
const EditProgram = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditStuff', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Programs.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Programs.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditStuff', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { school, country, description, image, site, url } = data;
    Programs.collection.update(_id, { $set: { school, country, description, image, site, url } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Edit Study Abroad Program Info</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <TextField name="school" />
                <SelectField name="country" />
                <LongTextField name="description" />
                <TextField name="image" />
                <SelectField name="site" />
                <TextField name="url" />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditProgram;
