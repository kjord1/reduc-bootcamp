import React from 'react';
import PropTypes from 'prop-types';

const ProfileNameComponent = ({
  profileName,
  updateProfileName,
  clearProfileName
}) => (
  <div>
    <h1>
      <span className="fa fa-user" aria-hidden="true" />&nbsp;
      {profileName || 'Unknown User'}
    </h1>
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={profileName}
        onChange={updateProfileName}
      />
      <span className="input-group-btn">
        <button type="button" className="btn btn-danger " onClick={clearProfileName}>
          <span className="fa fa-eraser" />
        </button>
      </span>
    </div>
  </div>
);

ProfileNameComponent.displayName = 'ProfileNameComponent';
ProfileNameComponent.propTypes = {
  profileName: PropTypes.string.isRequired,
  updateProfileName: PropTypes.func.isRequired,
  clearProfileName: PropTypes.func.isRequired
};

export default ProfileNameComponent;
