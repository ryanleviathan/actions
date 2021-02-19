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
      <d1>
        <dt>Title</dt>
        <dd>{commentTitle}</dd>

        <dt>Body</dt>
        <dd>{commentBody}</dd>
      </d1>
      <button onClick={handleClick}>Delete</button>
    </>
  );
};

Comment.propTypes = {
  commentTitle: PropTypes.string.isRequired,
  commentBody: PropTypes.string.isRequired
};

export default Comment;
