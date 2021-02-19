import React, { createContext, useContext, useReducer } from 'react';
import reducer, { initialState } from '../reducers/commentReducer';

const CommentContext = createContext(null);

export const CommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CommentContext.Provider value={{ state, dispatch }}>
      {children}
    </CommentContext.Provider>
  );
};

export const useSelector = selectorFn => {
  const { state } = useContext(CommentContext);

  return selectorFn(state);
};

export const useDispatch = () => {
  const { dispatch } = useContext(CommentContext);

  return dispatch;
};
