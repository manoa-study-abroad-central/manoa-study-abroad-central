import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Program table. See pages/ListProgramAdmin.jsx. */
// todo: make it look okay
const ProgramItemAdmin = ({ program }) => (
  /* <tr>
    <td>{program.school}</td>
    <td>{program.country}</td>
    <td>{program.description}</td>
    <td>{program.image}</td>
    <td>{program.site}</td>
    <td>{program.url}</td>
    <td>
      <Link to={`/editProgram/${program._id}`}>Edit</Link>
    </td>
  </tr> */
  <Card>
    <Card.Header>
      <Image src={program.image} className="img-fluid shadow-4" />
    </Card.Header>
    <Card.Title className="text-center">{program.school}</Card.Title>
    <Card.Subtitle className="py-1 text-center">{program.country}</Card.Subtitle>
    <Card.Subtitle className="py-2 text-center"><Link to={program.url}>{program.site}</Link></Card.Subtitle>
    <Card.Body>
      <Card.Text>{program.description}</Card.Text>
      <Link to={`/editProgram/${program._id}`}>Edit</Link>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
ProgramItemAdmin.propTypes = {
  program: PropTypes.shape({
    school: PropTypes.string,
    country: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    site: PropTypes.string,
    url: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default ProgramItemAdmin;
