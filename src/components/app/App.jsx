import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';
import BlogPage from '../blogs/BlogPage';
import CommentPage from '../comments/CommentPage';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={BlogPage} />
          <Route path="/:id" component={CommentPage} />
        </Switch>
      </Router>
    </>
  );
}
