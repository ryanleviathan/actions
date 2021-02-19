import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../state/CommentProvider';
import { deleteComment } from '../../actions/commentActions';

const Comment = ({ commentTitle, commentBody }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteComment(commentTitle));
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
  commentBody: PropTypes.string.isRequired
};

export default Comment;
