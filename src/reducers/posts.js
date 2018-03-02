export default (oldState = [], action) => {
  switch(action.type) {
    case 'SET_POSTS':
      return action.posts;
    default:
      return oldState;
  }
};
