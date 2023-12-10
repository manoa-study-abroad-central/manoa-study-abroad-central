import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Posts } from '../../api/post/Post';
import PostUser from '../components/PostUser';
import LoadingSpinner from '../components/LoadingSpinner';
import { Comments } from '../../api/comment/Comments';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListPostUser = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, posts, comments } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Posts.userPublicationName, Posts.adminPublicationName);
    const subscription2 = Meteor.subscribe(Comments.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready() && subscription2.ready();
    // Get the Stuff documents
    const postItems = Posts.collection.find({}).fetch();
    const commentItems = Comments.collection.find({}).fetch();
    return {
      posts: postItems.filter(item => !item.isFlagged),
      comments: commentItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container id="lisPostUser-page" className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h1 id="page-title">Recent Posts</h1>
          </Col>
          <Row>
            {posts.map((post) => (<Row id="post-collection" key={post._id}><PostUser post={post} collection={Posts.collection} /></Row>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListPostUser;
