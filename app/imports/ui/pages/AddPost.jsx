import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

// Component for adding new posts to the database
const AddPost = () => {
  // States for storing user inputs from the post
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [privacy, setPrivacy] = useState('Public'); // Default privacy setting
  // States for handling feedback messages post submission
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Function to handle the post submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Reset feedback messages
    setError('');
    setSuccess('');

    // Call the Stuff method to insert the post into the 'Stuff' collection
    Meteor.call('stuff.insert', { title, body, privacy }, (err) => {
      if (err) {
        // Update the error state to display the error message
        setError('Error submitting post. See console for details.');
      } else {
        // Update the success state to display the success message
        setSuccess('Post submitted successfully!');
        // Clear the post fields after successful submission
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
          {/* Error message */}
          {error && <Alert variant="danger">{error}</Alert>}
          {/* Success message */}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit}>
            {/* Title */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Title:</Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </Col>
            </Form.Group>

            {/* Body */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Body:</Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter body"
                  value={body}
                  onChange={e => setBody(e.target.value)}
                />
              </Col>
            </Form.Group>

            {/* Privacy */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Privacy Options:</Form.Label>
              <Col sm={10}>
                <Form.Select
                  value={privacy}
                  onChange={e => setPrivacy(e.target.value)}
                >
                  <option>Public</option>
                  <option>Private</option>
                </Form.Select>
              </Col>
            </Form.Group>

            {/* Submit Button */}
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
