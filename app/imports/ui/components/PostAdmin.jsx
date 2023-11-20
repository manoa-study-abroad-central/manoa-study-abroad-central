import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Image, Row, Container } from 'react-bootstrap';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
const PostAdmin = ({ stuff, collection }) => {
  const removeItem = (docID) => {
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
            <Card.Header as="h5">Title: {stuff.name}</Card.Header>
            <Card.Body>
              <Row>
                <Col md={2}>
                  {/* eslint-disable-next-line max-len */}
                  <Image src="https://pbs.twimg.com/media/FtsxswzaUAAZXJj.jpg:large" width="134px" />
                  <Card.Text className="ms-4">{'  '} By: Username</Card.Text>
                </Col>
                <Col md={10}>
                  <Card.Text>Quantity: {stuff.quantity}</Card.Text>
                  <Card.Text>Condition: {stuff.condition}</Card.Text>
                  <Card.Text>Owner: {stuff.owner}</Card.Text>
                  <Button variant="danger" id="white" onClick={() => removeItem(stuff._id)}>Remove</Button>
                </Col>
              </Row>
              <Row className="justify-content-end">
                <Link to={`/edit/${stuff._id}`}>Edit</Link>
                <Button variant="warning" onClick={() => toggleFlag(stuff._id)}>
                  {stuff.isFlagged ? 'Unflag' : 'Flag'}
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
  stuff: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    condition: PropTypes.string,
    _id: PropTypes.string,
    owner: PropTypes.string,
    isFlagged: PropTypes.bool,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  collection: PropTypes.object.isRequired,
};

export default PostAdmin;
