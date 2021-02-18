import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { BlogProvider } from './state/BlogProvider';

render(
  <BlogProvider>
    <App />
  </BlogProvider>,
  document.getElementById('root')
);
