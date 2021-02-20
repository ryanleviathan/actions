import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

const Comment = ({ commentTitle, commentBody, postIndex }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteComment(postIndex, commentBody));
  };

  return (
    <>
      <div>
        <h4>{commentTitle}</h4>
        <p>{commentBody}</p>
      </div>
      <button onClick={handleClick}>Delete</button>
    </>
  );
};

Comment.propTypes = {
  commentTitle: PropTypes.string.isRequired,
  commentBody: PropTypes.string.isRequired,
  commentIndex: PropTypes.number.isRequired,
  postIndex: PropTypes.number.isRequired
};

export default Comment;
