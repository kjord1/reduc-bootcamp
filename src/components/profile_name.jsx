import React from 'react';
import PropTypes from 'prop-types';

const ProfileNameComponent = ({
  profileName
}) => (
  <div>
    <h1>
      <span className="fa fa-user" aria-hidden="true"/>&nbsp; {profileName}
    </h1>
  </div>
);

ProfileNameComponent.displayName = 'ProfileNameComponent';
ProfileNameComponent.propTypes = {
  profileName: PropTypes.string.isRequired
};

export default ProfileNameComponent;
