import Immutable from 'immutable';

export default (oldState = new Immutable.OrderedMap(), action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return oldState.concat(action.posts.map((post) => [post.id, post]));
    default:
      return oldState;
  }
};
