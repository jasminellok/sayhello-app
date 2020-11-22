import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, deleteBoard} from '../../actions/board_actions';
import { openModal } from '../../actions/modal_action';


const mstp = (state, ownProps) => {
    const boards = state.entities.boards
    const id = ownProps.match.params.boardId
    return {
        board: boards[id], 
        currentUser: state.entities.users[state.session.id],
    }
}

const mdtp = dispatch => {
    return {
        fetchBoard: (id) => dispatch(fetchBoard(id)),
        deleteBoard: (id) => dispatch(deleteBoard(id)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mstp, mdtp)(BoardShow);