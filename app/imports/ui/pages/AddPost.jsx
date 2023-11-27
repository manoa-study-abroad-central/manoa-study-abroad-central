import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Posts } from '../../api/post/Post';

/*
const AddPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [privacy, setPrivacy] = useState('Public');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    Meteor.call('post.insert', { title, body, privacy }, (err) => {
      if (err) {
        setError('Error submitting post. See console for details.');
      } else {
        setSuccess('Post submitted successfully!');
        setTitle('');
        setBody('');
        setPrivacy('Public');
      }
    });
*/
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
const AddPost = () => {

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
  /*
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2>Add Post Page</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Title:</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Body:</Form.Label>
              <Col sm={10}>
                <Form.Control as="textarea" rows={3} placeholder="Enter body" value={body} onChange={e => setBody(e.target.value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Privacy Options:</Form.Label>
              <Col sm={10}>
                <Form.Select value={privacy} onChange={e => setPrivacy(e.target.value)}>
                  <option>Public</option>
                  <option>Private</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Row className="justify-content-center">
              <Col md={12} className="text-center">
                <Button type="submit" variant="primary">Submit</Button>
              </Col>
            </Row>
          </Form>
*/
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

export default AddPost;
