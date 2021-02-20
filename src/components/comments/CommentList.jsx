import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getComments } from '../../selectors/commentSelector';
import Comment from './Comment';

const CommentList = ({ postIndex }) => {
  const comments = useSelector(getComments);
  const commentsArray = comments[postIndex] || [];

  const commentElements = commentsArray.map((comment, index) => (
    <li key={index}>
      <Comment 
        {...comment} 
        commentIndex={index} 
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
