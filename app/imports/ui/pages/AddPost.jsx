import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const AddPost = () => {
  // Handle your submit function here
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2>Add Post Page</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Title:
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Enter title" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Body:
              </Form.Label>
              <Col sm={10}>
                <Form.Control as="textarea" rows={3} placeholder="Enter body" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Privacy Options:
              </Form.Label>
              <Col sm={10}>
                <Form.Select>
                  <option>Public</option>
                  <option>Private</option>
                  {/* Add other options as necessary */}
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
