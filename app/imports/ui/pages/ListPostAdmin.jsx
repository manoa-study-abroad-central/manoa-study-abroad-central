import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row } from 'react-bootstrap';
import { Stuffs } from '../../api/stuff/Stuff';
import PostAdmin from '../components/PostAdmin';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Stuff documents. Use <PostAdmin> to render each row. */
const ListPostAdmin = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { stuffs, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Stuffs.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const items = Stuffs.collection.find({}).fetch();
    return {
      stuffs: items,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h1>Admin Post Page</h1>
          </Col>
          <Row>
            {stuffs.map((stuff) => (<Row key={stuff._id}><PostAdmin stuff={stuff} collection={Stuffs.collection} /></Row>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListPostAdmin;
