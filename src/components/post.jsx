import React from 'react';
import PropTypes from 'prop-types';

const PostComponent = ({
  id,
  created,
  text
}) => (
  <div data-id={id} className="panel panel-default">
  <div className="panel-heading">
    <div className="row">
      <div className="pull-right">
        {created}
      </div>
    </div>
  </div>
  <div className="panel-body">
    { text }
  </div>
</div>
);

PostComponent.displayName = 'PostComponent';
PostComponent.propTypes = {
  id: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default PostComponent;
