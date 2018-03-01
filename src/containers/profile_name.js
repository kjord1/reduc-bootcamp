import {
  connect
} from 'react-redux';
import ProfileNameComponent from '../components/profile_name';

const mapStateToProps = (state) => ({
  profileName: state.ProfileName
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNameComponent);
