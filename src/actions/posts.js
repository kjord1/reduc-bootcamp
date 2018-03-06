import agent from 'superagent';

const setPostsStatus = (postsStatus) => ({
  type: 'SET_POSTS_STATUS',
  postsStatus: postsStatus
});

const setPosts = (posts) => ({
  type: 'SET_POSTS',
  posts: posts
});

export const fetchPosts = () => (dispatch) => {
  dispatch(setPostsStatus('FETCHING'));

  agent.get('http://localhost:3000/posts/')
    .then((response) => {
      dispatch(setPostsStatus('SUCCESS'));
      dispatch(setPosts(response.body));
    })
    .catch(() => dispatch(setPostsStatus('FAILED')));
};
