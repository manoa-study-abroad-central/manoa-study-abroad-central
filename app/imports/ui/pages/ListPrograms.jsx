import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import ProgramItem from '../components/ProgramItem';
import LoadingSpinner from '../components/LoadingSpinner';
import { Programs } from '../../api/program/Program';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListPrograms = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, stuffs: programs } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Programs.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const programItems = Programs.collection.find({}).fetch();
    return {
      programs: programItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>List Programs</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>School</th>
                <th>Country</th>
                <th>Region</th>
                <th>Description</th>
                <th>Image</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program) => <ProgramItem key={program._id} program={program} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListPrograms;
