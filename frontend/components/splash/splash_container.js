import { connect } from 'react-redux';
import Splash from './splash';
import { login} from '../../actions/session_actions';

// const mstp = (state) => {
//     return {
//         currentUser: state.entities.users[state.session.id]
//     };
// };

const mdtp = dispatch => {
    return {
        login: (user) => dispatch(login(user))
    }
};


export default connect(null, mdtp)(Splash);
