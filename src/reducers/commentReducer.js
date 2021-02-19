import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

export const initialState = {
  comments: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        [action.payload.postIndex]: [
          (state[action.payload.postIndex] || []),
          action.payload.comment
        ]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [action.payload.postIndex]: [
          (state[action.payload.postIndex] && action.payload.commentIndex)
        ]
      };
    default:
      return state;
  }
}
