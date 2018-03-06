import { connect } from 'react-redux';

import PostComponent from '../components/post';

const mapStateToProps = (state, ownProps) => ({
  post: ownProps.post
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent);
