import { createBlog, 
  CREATE_BLOG, 
  deleteBlog, 
  DELETE_BLOG } 
  from './blogActions';

describe('blog actions', () => {
  it('creates a create blog action', () => {
    const action = createBlog({
      title: 'I have Friday plans!',
      body: 'These are my plans. Here I talk about all of them!'
    });

    expect(action).toEqual({
      type: CREATE_BLOG,
      payload: {
        title: 'I have Friday plans!', 
        body: 'These are my plans. Here I talk about all of them!'
      }
    });
  });

  it('deletes a created blog', () => {
    const action = deleteBlog({
      title: 'I have Friday plans!'
    });

    expect(action).toEqual({
      type: DELETE_BLOG,
      payload: {
        title: 'I have Friday plans!'
      }
    });
  });
});
