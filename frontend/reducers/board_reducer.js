
import { REC_BOARD, REC_ALL_BOARDS, REMOVE_BOARD  } from '../actions/board_actions';

const boardsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = { ...state }

    switch (action.type) {
        case REC_BOARD:
            return Object.assign({}, state, { [action.board.id]: action.board })
        case REC_ALL_BOARDS:
            return action.boards;
        case REMOVE_BOARD:
            delete newState[action.boardId]
            return newState;
        default:
            return state;
    }
};

export default boardsReducer;