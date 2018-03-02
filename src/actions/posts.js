import agent from 'superagent';

export const setPostsStatus = (postsStatus) => ({
  type: 'SET_POSTS_STATUS',
  postsStatus: postsStatus
});

export const fetchPosts = () => (dispatch, getState) => {
  dispatch(setPostsStatus('FETCHING'));

  agent.get('http://localhost:3000/posts')
  .then( response => dispatch(setPostsStatus('SUCCESS')) )
  .catch( err => dispatch(setPostsStatus('FAILED')) );
};
