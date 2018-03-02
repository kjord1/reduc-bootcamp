import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import Post from '../containers/post'

const PostsComponent = ({
  postsStatus,
  posts,
  fetchPosts
}) => (
  <div>
    {postsStatus==='FETCHING' && 'Fetching posts from remote...'}
    {postsStatus==='FAILED' &&
      <div className="alert alert-danger">
        <span className="fa fa-exclamation fa-2x" /> Failed to load posts.
        <br/>
        <button type="button" className="btn btn-danger" onClick={fetchPosts}>
          Try Again
        </button>
      </div>
    }

    {postsStatus==='SUCCESS' &&
      <div>
        Here are your posts:

        { posts.size > 0 && posts.toArray().map((post) => (
          <Post key={post.id} post={post} />
        )) }
      </div>
    }
  </div>
)

PostsComponent.displayName = 'PostsComponent';
PostsComponent.propTypes = {
  postsStatus: PropTypes.oneOf(['FETCHING', 'FAILED', 'SUCCESS']).isRequired,
  posts: PropTypes.instanceOf(Immutable.OrderedMap).isRequired,
  // (
  //   PropTypes.number.isRequired,
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     created: PropTypes.string.isRequired,
  //     text: PropTypes.string.isRequired
  //   }).isRequired
  // ),
  fetchPosts: PropTypes.func.isRequired
};

export default PostsComponent;
