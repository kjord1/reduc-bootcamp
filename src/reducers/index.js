import { combineReducers } from 'redux';

import ProfileName from './profile_name';
import PostsStatus from './posts_status';
import Posts from './posts';

export default combineReducers({
  ProfileName,
  PostsStatus,
  Posts
});
