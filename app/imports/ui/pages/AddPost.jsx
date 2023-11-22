import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

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
  };

  return (
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
        </Col>
      </Row>
    </Container>
  );
};

export default AddPost;
