
import { RECEIVE_LIST_ERRORS, CLEAR_ERRORS } from '../../actions/LIST_actions';

const defaultErrors = [];

const ListErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case CLEAR_ERRORS:
            return defaultErrors;
        case RECEIVE_LIST_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default ListErrorsReducer;