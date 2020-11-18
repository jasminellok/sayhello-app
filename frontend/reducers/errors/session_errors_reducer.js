
import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_ERRORS } from '../../actions/session_actions';

const defaultErrors = [];

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return defaultErrors;
        case CLEAR_ERRORS:
            return defaultErrors;
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default sessionErrorsReducer;