import React, { useState } from 'react';
import { createBlog } from '../../actions/blogActions';
import { useDispatch } from '../../state/BlogProvider';

const BlogForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(createBlog({ title, body }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <textarea
        rows="10"
        cols="30"
        type="text"
        placeholder="Body"
        value={body}
        onChange={({ target }) => setBody(target.value)}
      />
      <button>Create Blog</button>
    </form>
  );
};

export default BlogForm;
