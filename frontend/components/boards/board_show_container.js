import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, deleteBoard, createBoardUser, clearErrors } from '../../actions/board_actions';
import { openModal, closeModal} from '../../actions/modal_action';


const mstp = (state, ownProps) => {
    const boards = state.entities.boards
    const id = ownProps.match.params.boardId
    return {
        board: boards[id], 
        boardId: id,
        currentUser: state.entities.users[state.session.id],
        listIds: boards[id] ? boards[id].listIds : [],
        errors: state.errors.board
    }
}

const mdtp = dispatch => {
    return {
        fetchBoard: (id) => dispatch(fetchBoard(id)),
        createBoardUser: (boardId, userId) => dispatch(createBoardUser(boardId, userId)),
        deleteBoard: (id) => dispatch(deleteBoard(id)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => {
            return dispatch(clearErrors())
        }
    }
}

export default connect(mstp, mdtp)(BoardShow);