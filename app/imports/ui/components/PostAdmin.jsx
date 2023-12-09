import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Image, Row, Container, ListGroupItem, ListGroup } from 'react-bootstrap';
import Comment from './Comment';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
const PostAdmin = ({ post, collection, comments, cc }) => {
  const removeItem = (docID) => {
    // eslint-disable-next-line no-console
    console.log(`The item to remove ${docID}`);
    collection.remove(docID);
  };
  const removeComment = (cID) => {
    cc.remove(cID);
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
            <Card.Header as="h4">
              {post.title}
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={2}>
                  {/* eslint-disable-next-line max-len */}
                  <Image src="https://pbs.twimg.com/media/FtsxswzaUAAZXJj.jpg:large" width="134px" />
                  <Card.Text className="ms-4">By {post.name}</Card.Text>
                  <Card.Text className="pt-4"><strong>Owner:</strong></Card.Text>
                  <Card.Text className="pl-1">{post.owner}</Card.Text>
                  <Link to={`/edit/${post._id}`}>Edit Post</Link>
                </Col>
                <Col md={10}>
                  <Card.Text><strong>Program:</strong> {post.program}</Card.Text>
                  <Card.Text><strong>Country/Region:</strong> {post.countryRegion}</Card.Text>
                  <Card.Text>{post.description}</Card.Text>
                  <Row>
                    <Col md={2} className="mt-2">
                      <p>Likes ({post.likes})</p>
                    </Col>
                    <Col md={2} className="mt-2">
                      <p>Comments ({comments.length})</p>
                    </Col>
                  </Row>
                  <Card.Text><h5>Comments:</h5> </Card.Text>
                  <ListGroup variant="flush">
                    <ListGroupItem>
                      {comments.map((comment) => <div><Comment key={comment._id} comment={comment} /><Button variant="danger" id="white" onClick={() => removeComment(comment._id)}>Remove Comment</Button> </div>)}
                    </ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
              <Row className="justify-content-end mt-5">
                <Button variant="warning" onClick={() => toggleFlag(post._id)}>
                  {post.isFlagged ? 'Unflag' : 'Flag'}
                </Button>
              </Row>
              <Row className="justify-content-end mt-2">
                <Button variant="danger" id="white" onClick={() => removeItem(post._id)}>Remove Post</Button>
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
    likes: PropTypes.number,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string,
    postId: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  })).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  collection: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  cc: PropTypes.func.isRequired,
};

export default PostAdmin;
