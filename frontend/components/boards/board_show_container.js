import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, deleteBoard} from '../../actions/board_actions';
import { openModal, closeModal} from '../../actions/modal_action';


const mstp = (state, ownProps) => {
    const boards = state.entities.boards
    const id = parseInt(ownProps.match.params.boardId)
    return {
        board: boards[id], 
        boardId: id,
        currentUser: state.entities.users[state.session.id],
        listIds: boards[id] ? boards[id].listIds : [],
    }
}

const mdtp = dispatch => {
    return {
        fetchBoard: (id) => dispatch(fetchBoard(id)),
        deleteBoard: (id) => dispatch(deleteBoard(id)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mstp, mdtp)(BoardShow);