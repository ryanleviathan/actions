import React from 'react';
import { useSelector } from 'react-redux';
import { getBlogs } from '../../selectors/blogSelector';
import Blog from './Blog';

const BlogList = () => {
  const blogs = useSelector(getBlogs);

  const blogElements = blogs.blogs.map((blog, index) => (
    <li key={blog.title}>
      <Blog {...blog} postIndex={index} />
    </li>
  ));

  return (
    <ul>
      {blogElements}
    </ul>
  );
};

export default BlogList;
