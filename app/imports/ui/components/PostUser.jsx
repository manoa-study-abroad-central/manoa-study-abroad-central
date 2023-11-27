import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

/** Renders a single row in the List post table. See pages/Listpost.jsx. */
const PostUser = ({ post }) => (
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
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

// Require a document to be passed to this component.
PostUser.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    program: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
    name: PropTypes.string,
    countryRegion: PropTypes.string,
  }).isRequired,
};

export default PostUser;
