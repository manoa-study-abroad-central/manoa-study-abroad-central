import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import ProgramItem from '../components/ProgramItem';
import LoadingSpinner from '../components/LoadingSpinner';
import { Programs } from '../../api/program/Program';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListPrograms = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, programs } = useTracker(() => {
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
  // eslint-disable-next-line no-console
  console.log('programs: ', programs);
  return (ready ? (
    <Container id="listPrograms-page" className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2 id="page-title">List of Study Abroad Programs</h2>
          </Col>
          <Col className="justify-content-center">
            {programs.map((program) => (<Col key={program._id}><ProgramItem program={program} /></Col>))}
          </Col>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

/*
<Container id="listPrograms-page" className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2 id="page-title">List of Study Abroad Programs</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Schol</th>
                <th>Country</th>
                <th>Description</th>
                <th>Image</th>
                <th>URL</th>
                <th>Site</th>
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
 */

export default ListPrograms;
