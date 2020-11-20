
import { RECEIVE_BOARD_ERRORS, CLEAR_BOARD_ERRORS } from '../../actions/board_actions';

const defaultErrors = [];

const boardErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case CLEAR_BOARD_ERRORS:
            return defaultErrors;
        case RECEIVE_BOARD_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default boardErrorsReducer;