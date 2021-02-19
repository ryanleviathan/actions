import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

export const initialState = {
  comments: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(blog => blog.title !== action.payload)
      };
    default:
      return state;
  }
}
