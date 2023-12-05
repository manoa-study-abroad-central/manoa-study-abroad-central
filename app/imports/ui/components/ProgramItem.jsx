import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Program table. See pages/ListProgram.jsx. */
// todo: change path to edit link; check subscriptions in browser extension
const ProgramItem = ({ program }) => (
  <tr>
    <td>{program.school}</td>
    <td>{program.country}</td>
    <td>{program.description}</td>
    <td>{program.image}</td>
    <td>{program.url}</td>
    <td>
      <Link to={`/edit/${program._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
ProgramItem.propTypes = {
  program: PropTypes.shape({
    school: PropTypes.string,
    country: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default ProgramItem;
