import { getBlogs, countBlogs } from './blogSelector';

describe('blog selectors', () => {
  it('select the list of blogs from state', () => {
    const state = {
      blogs: [{
        title: 'Look at me!',
        body: 'Just kidding. Pls do not do that.'
      }]
    };

    const blogs = getBlogs(state);

    expect(blogs).toEqual(
      [{
        title: 'Look at me!',
        body: 'Just kidding. Pls do not do that.'
      }]
    );
  });

  it('selects the number of blogs', () => {
    const state = {
      blogs: [{
        title: 'Look at me!',
        body: 'Just kidding. Pls do not do that.'
      }]
    };

    expect(countBlogs(state)).toEqual(1);
  });
});
