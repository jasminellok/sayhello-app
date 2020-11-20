
import { REC_BOARD, RECEIVE_ERRORS, CLEAR_ERRORS } from '../../actions/board_actions';

const defaultErrors = [];

const boardErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case REC_BOARD:
            return defaultErrors;
        case CLEAR_ERRORS:
            return defaultErrors;
        case RECEIVE_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default boardErrorsReducer;