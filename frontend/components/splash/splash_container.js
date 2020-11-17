import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Splash from './splash';

const mstp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mdtp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mstp, mdtp)(Splash);
