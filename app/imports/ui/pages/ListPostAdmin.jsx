import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row } from 'react-bootstrap';
import { Posts } from '../../api/post/Post';
import PostAdmin from '../components/PostAdmin';
import LoadingSpinner from '../components/LoadingSpinner';
import { Comments } from '../../api/comment/Comments';

/* Renders a table containing all of the Stuff documents. Use <PostAdmin> to render each row. */
const ListPostAdmin = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { posts, ready, comments } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Posts.adminPublicationName);
    const subscription2 = Meteor.subscribe(Comments.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready() && subscription2.ready();
    // Get the post documents
    const items = Posts.collection.find({}).fetch();
    const commentItems = Comments.collection.find({}).fetch();
    return {
      posts: items,
      comments: commentItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container id="admin-post-page" className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>Admin Post Page</h2>
          </Col>
          <Row>
            {posts.map((post) => (<Row key={post._id}><PostAdmin post={post} collection={Posts.collection} comments={comments.filter(comment => (comment.postId === post._id))} cc={Comments.collection} /></Row>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListPostAdmin;
