import React, { createContext, useContext, useReducer } from 'react';
import reducer, { initialState } from '../reducers/blogReducer';

const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useSelector = selectorFn => {
  const { state } = useContext(BlogContext);

  return selectorFn(state);
};

export const useDispatch = () => {
  const { dispatch } = useContext(BlogContext);

  return dispatch;
};
