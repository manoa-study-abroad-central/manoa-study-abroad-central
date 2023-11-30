import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Image, Row, Container } from 'react-bootstrap';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
const PostAdmin = ({ post, collection }) => {
  const removeItem = (docID) => {
    // eslint-disable-next-line no-console
    console.log(`The item to remove ${docID}`);
    collection.remove(docID);
  };

  const toggleFlag = (docID) => {
    const currentFlagStatus = collection.findOne(docID).isFlagged;
    collection.update(docID, { $set: { isFlagged: !currentFlagStatus } });
  };
  return (
    <Container>
      <Row>
        <Col>
          <Card className="w-100">
            <Card.Header as="h4">{post.title}</Card.Header>
            <Card.Body>
              <Row>
                <Col md={2}>
                  {/* eslint-disable-next-line max-len */}
                  <Image src="https://pbs.twimg.com/media/FtsxswzaUAAZXJj.jpg:large" width="134px" />
                  <Card.Text className="ms-4">By {post.name}</Card.Text>
                </Col>
                <Col md={10}>
                  <Card.Text><strong>Program:</strong> {post.program}</Card.Text>
                  <Card.Text><strong>Country/Region:</strong> {post.countryRegion}</Card.Text>
                  <Card.Text>{post.description}</Card.Text>
                  <Card.Text><strong>Owner:</strong> {post.owner}</Card.Text>
                  <Button variant="danger" id="white" onClick={() => removeItem(post._id)}>Remove</Button>
                </Col>
              </Row>
              <Row className="justify-content-end">
                <Link to={`/edit/${post._id}`}>Edit</Link>
                <Button variant="warning" onClick={() => toggleFlag(post._id)}>
                  {post.isFlagged ? 'Unflag' : 'Flag'}
                </Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// Require a document to be passed to this component.
PostAdmin.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    program: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
    owner: PropTypes.string,
    isFlagged: PropTypes.bool,
    name: PropTypes.string,
    countryRegion: PropTypes.string,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  collection: PropTypes.object.isRequired,
};

export default PostAdmin;
