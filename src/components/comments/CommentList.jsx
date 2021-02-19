import React from 'react';
import { useSelector } from '../../state/CommentProvider';
import { getComments } from '../../selectors/commentSelector';
import Comment from './Comment';

const CommentList = () => {
  const comments = useSelector(getComments);

  const commentElements = comments.map(comment => (
    <li key={comment.title}>
      <Comment {...comment} />
    </li>
  ));

  return (
    <ul>
      {commentElements}
    </ul>
  );
};

export default CommentList;
