import {
  connect
} from 'react-redux';
import ProfileNameComponent from '../components/profile_name';
import { setProfileName } from '../actions/profile_name'

const mapStateToProps = (state) => ({
  profileName: state.ProfileName
});

const mapDispatchToProps = (dispatch) => ({
  clearProfileName: () => dispatch(setProfileName('')),
  updateProfileName: (event) => dispatch(setProfileName(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNameComponent);
