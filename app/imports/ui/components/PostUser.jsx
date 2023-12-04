import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Container, Image, Row, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { HeartFill, Heart } from 'react-bootstrap-icons';
import { Posts } from '../../api/post/Post';
import AddComment from './AddComment';
import Comment from './Comment';

/** Renders a single row in the List post table. See pages/Listpost.jsx. */
const PostUser = ({ post, comments }) => {
  const handleUnlike = () => {
    Posts.collection.update(post._id, { $inc: { likes: -1 }, $set: { isLiked: false } });
  };

  const handleLike = () => {
    Posts.collection.update(post._id, { $inc: { likes: 1 }, $set: { isLiked: true } });
  };
  return (
    // <Link to={`/edit/${post._id}`}>Edit</Link>
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
                  <Row>
                    <Col md={2}>
                      {post.isLiked ? (
                        <Button variant="white" onClick={handleUnlike}>
                          <HeartFill color="deeppink" /> ({post.likes})
                        </Button>
                      ) : (
                        <Button variant="white" onClick={handleLike}>
                          <Heart /> ({post.likes})
                        </Button>
                      )}
                    </Col>
                    <Col md={2} className="mt-2">
                      <p>Comments ({comments.length})</p>
                    </Col>
                  </Row>
                  <Card.Text><h5>Comments:</h5> </Card.Text>
                  <ListGroup variant="flush">
                    <ListGroupItem>
                      {comments.map((comment) => <Comment key={comment._id} comment={comment} />)}
                    </ListGroupItem>
                  </ListGroup>
                  <AddComment owner={post.owner} postId={post._id} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// Require a document to be passed to this component.
PostUser.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    program: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
    name: PropTypes.string,
    countryRegion: PropTypes.string,
    owner: PropTypes.string,
    likes: PropTypes.number,
    isLiked: PropTypes.bool,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string,
    postId: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  })).isRequired,
};

export default PostUser;
