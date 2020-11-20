import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, deleteBoard } from '../../actions/board_actions';


const mstp = (state, ownProps) => {
    const boards = state.entities.boards
    const id = ownProps.match.params.boardId
    console.log(state.entities.boards) 
    return {
        board: boards[id]
    }
}

const mdtp = dispatch => {
    return {
        fetchBoard: (id) => dispatch(fetchBoard(id)),
        deleteBoard: (id) => dispatch(deleteBoard(id)),
        updateBoard: (board) => dispatch(updateBoard(board))
    }
}

export default connect(mstp, mdtp)(BoardShow);