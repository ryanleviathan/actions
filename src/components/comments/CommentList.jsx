import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from '../../state/CommentProvider';
import { getComments } from '../../selectors/commentSelector';
import Comment from './Comment';

const CommentList = ({ postIndex }) => {
  const comments = useSelector(getComments);
  const commentsArray = comments[postIndex] || [];

  const commentElements = commentsArray.map((comment, commentIndex) => (
    <li key={commentIndex}>
      <Comment 
        comment={comment} 
        commentIndex={commentIndex} 
        postIndex={postIndex} />
    </li>
  ));

  return (
    <ul>
      {commentElements}
    </ul>
  );
};

CommentList.propTypes = {
  postIndex: PropTypes.string.isRequired
};

export default CommentList;
