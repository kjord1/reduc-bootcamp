export default (oldState = 'FAILED', action) => {
  switch (action.type) {
    case 'SET_POSTS_STATUS':
      return action.postsStatus;
    default:
      return oldState;
  }
}
