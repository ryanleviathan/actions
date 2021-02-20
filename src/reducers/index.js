import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import commentReducer from './commentReducer';

export default combineReducers({
  blogs: blogReducer,
  comments: commentReducer
});
