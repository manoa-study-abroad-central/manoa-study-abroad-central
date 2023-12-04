import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Comment = ({ comment }) => (
  <ListGroup.Item>
    <li>{comment.comment}</li>
  </ListGroup.Item>
);

// Require a document to be passed to this component.
Comment.propTypes = {
  comment: PropTypes.shape({
    comment: PropTypes.string,
    postId: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Comment;
