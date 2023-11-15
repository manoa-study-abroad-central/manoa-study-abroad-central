import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const ProgramItem = ({ program }) => (
  <tr>
    <td>{program.school}</td>
    <td>{program.country}</td>
    <td>{program.region}</td>
    <td>{program.description}</td>
    <td>{program.image}</td>
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
    region: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default ProgramItem;
