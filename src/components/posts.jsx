import React from 'react';
import PropTypes from 'prop-types';
import Post from './post'

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

        { posts.length > 0 && posts.map((post) => (
          <Post key={post.id} {...post} />
        //   <div key={post.id} data-id={post.id} className="panel panel-default">
        //   <div className="panel-heading">
        //     <div className="row">
        //       <div className="pull-right">
        //         {post.created}
        //       </div>
        //     </div>
        //   </div>
        //   <div className="panel-body">
        //     { post.text }
        //   </div>
        // </div>
        )) }
      </div>
    }
  </div>
)

PostsComponent.displayName = 'PostsComponent';
PostsComponent.propTypes = {
  postsStatus: PropTypes.oneOf(['FETCHING', 'FAILED', 'SUCCESS']).isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      created: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ),
  fetchPosts: PropTypes.func.isRequired
};

export default PostsComponent;
