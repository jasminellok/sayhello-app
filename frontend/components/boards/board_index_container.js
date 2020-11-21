import { connect } from 'react-redux';
import BoardIndex from './board_index';
import { fetchAllBoards, deleteBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_action';


const mstp = (state) => {
    console.log
    return {
        currentUser: state.entities.users[state.session.id],
        boards: Object.values(state.entities.boards)
    };
};

const mdtp = dispatch => {
    return {
        fetchAllBoards: () => dispatch(fetchAllBoards()),
        openModal: (modal) => dispatch(openModal(modal))
    }
};


export default connect(mstp, mdtp)(BoardIndex);
