import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../../actions/blogActions';

const Blog = ({ postIndex, title, body }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBlog(title));
  };

  return (
    <>
      <Link to={`/${postIndex}`}>
        <div>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
        <button onClick={handleClick}>Delete</button>
      </Link>
    </>
  );
};

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  postIndex: PropTypes.number.isRequired
};

export default Blog;
