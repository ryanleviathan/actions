export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (postIndex, comment) => ({
  type: CREATE_COMMENT,
  payload: { postIndex, comment }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (postIndex, commentIndex) => ({
  type: DELETE_COMMENT,
  payload: { postIndex, commentIndex }
});
