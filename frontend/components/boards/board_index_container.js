import { connect } from 'react-redux';
import BoardIndex from './board_index';
import { fetchAllBoards, deleteBoard } from '../../actions/board_actions';

const mstp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        boards: Object.values(state.entities.boards)
    };
};

const mdtp = dispatch => {
    return {
        fetchAllBoards: () => dispatch(fetchAllBoards())
    }
};


export default connect(mstp, mdtp)(BoardIndex);
