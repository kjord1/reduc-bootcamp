import {
  connect
} from 'react-redux';

import PostsComponent from '../components/posts';
import { fetchPosts } from '../actions/posts';

const mapStateToProps = (state) => ({
  postsStatus: state.PostsStatus,
  posts: state.Posts
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsComponent);
