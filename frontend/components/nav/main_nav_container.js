import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAllBoards } from '../../actions/board_actions';
import MainNavBar from './main_nav';
// |board index home| BONUS:index dropdown|           |logo|          |BONUS:create modal|profile dropdown|
const mstp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        boards: Object.values(state.entities.boards)
    };
};

const mdtp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchAllBoards: () => dispatch(fetchAllBoards()) 
    }
};

export default connect(mstp, mdtp)(MainNavBar);
