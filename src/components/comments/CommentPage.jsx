import React from 'react';
import PropTypes from 'prop-types';
import CommentForm from '../form/CommentForm';
import CommentList from './CommentList';

const CommentPage = ({ match }) => {
  return (
    <>
      <CommentForm postIndex={match.params.id}/>
      <CommentList postIndex={match.params.id}/>
    </>
  );
};

CommentPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CommentPage;
