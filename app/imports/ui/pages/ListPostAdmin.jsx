import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row } from 'react-bootstrap';
import { Posts } from '../../api/post/Post';
import PostAdmin from '../components/PostAdmin';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Stuff documents. Use <PostAdmin> to render each row. */
const ListPostAdmin = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { posts, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Posts.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const items = Posts.collection.find({}).fetch();
    return {
      posts: items,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3" id="admin-post-page">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h1>Admin Post Page</h1>
          </Col>
          <Row>
            {posts.map((post) => (<Row key={post._id}><PostAdmin post={post} collection={Posts.collection} /></Row>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListPostAdmin;
