import React from 'react';
import PropTypes from 'prop-types';

const PostsComponent = ({
  postsStatus
}) => (
  <div>
    {postsStatus==='FETCHING' && 'Fetching posts from remote...'}
    {postsStatus==='FAILED' && 'Failed to load posts!'}
    {postsStatus==='SUCCESS' && 'Posts loaded.'}
  </div>
)

PostsComponent.displayName = 'PostsComponent';
PostsComponent.propTypes = {
  postsStatus: PropTypes.oneOf(['FETCHING', 'FAILED', 'SUCCESS']).isRequired
};

export default PostsComponent;
