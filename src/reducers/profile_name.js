export default (oldState = '', action) => {
  switch(action.type) {
    case 'SET_PROFILE_NAME':
      return action.profileName;
    default:
      return oldState;
  }
};
