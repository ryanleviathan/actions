import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../actions/blogActions';

const BlogForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(createBlog({ title, body }));
    setTitle('');
    setBody('');
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
