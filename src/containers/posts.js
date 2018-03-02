import {
  connect
} from 'react-redux';

import PostsComponent from '../components/posts';

const mapStateToProps = (state) => ({
  postsStatus: state.PostsStatus
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PostsComponent);
