import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Posts } from '../../api/post/Post';
import PostUser from '../components/PostUser';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListPostUser = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, posts } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Posts.userPublicationName, Posts.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const postItems = Posts.collection.find({}).fetch();
    return {
      posts: postItems.filter(item => !item.isFlagged),
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h1>User Posts</h1>
          </Col>
          <Row>
            {posts.map((post) => (<Row key={post._id}><PostUser post={post} collection={Posts.collection} /></Row>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListPostUser;
