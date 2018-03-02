import React from 'react';
import PropTypes from 'prop-types';

const PostComponent = ({
  post
}) => (
  <div data-id={post.id} className="panel panel-default">
  <div className="panel-heading">
    <div className="text-right">
      {post.created}
    </div>
  </div>
  <div className="panel-body">
    { post.text }
  </div>
</div>
);

PostComponent.displayName = 'PostComponent';
PostComponent.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostComponent;
