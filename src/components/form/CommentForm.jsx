import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../../selectors/blogSelector';
import { createComment } from '../../actions/commentActions';

const CommentForm = ({ postIndex }) => {
  const dispatch = useDispatch();

  const blogs = useSelector(getBlogs);
  const thisBlog = blogs.blogs[postIndex];

  const [commentTitle, setCommentTitle] = useState('');
  const [commentBody, setCommentBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(createComment(postIndex, { commentTitle, commentBody }));
    setCommentTitle('');
    setCommentBody('');
  };

  return (
    <>
      <div>
        <dt>Title</dt>
        <dd>{thisBlog.title}</dd>

        <dt>Body</dt>
        <dd>{thisBlog.body}</dd>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Comment Title"
          value={commentTitle}
          onChange={({ target }) => setCommentTitle(target.value)}
        />
        <textarea
          rows="10"
          cols="30"
          type="text"
          placeholder="Comment Body"
          value={commentBody}
          onChange={({ target }) => setCommentBody(target.value)}
        />
        <button>Comment</button>
      </form>
    </>
  );
};

CommentForm.propTypes = {
  postIndex: PropTypes.string.isRequired
};

export default CommentForm;
