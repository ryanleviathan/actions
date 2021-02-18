import { createBlog, deleteBlog } from '../actions/blogActions';
import reducer from './blogReducer';

describe('blog reducer', () => {
  it('adds a blog with CREATE_BLOG action', () => {
    const state = {
      blogs: []
    };
  
    const action = createBlog({
      title: 'Look at me!',
      body: 'Just kidding. Pls do not do that.'
    });
  
    const newState = reducer(state, action);
  
    expect(newState).toEqual({
      blogs: [{
        title: 'Look at me!',
        body: 'Just kidding. Pls do not do that.'
      }]
    });
  });

  it('deletes a blog with DELETE_BLOG action', () => {
    const state = {
      blogs: [{
        title: 'Look at me!',
        body: 'Just kidding. Pls do not do that.'
      }]
    };

    const action = deleteBlog('Look at me!');

    expect(reducer(state, action)).toEqual({
      blogs: []
    });
  });
});
