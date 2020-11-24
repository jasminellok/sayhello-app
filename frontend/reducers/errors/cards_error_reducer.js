
import { RECEIVE_CARD_ERRORS, CLEAR_ERRORS } from '../../actions/card_actions';

const defaultErrors = [];

const CardErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    debugger;
    switch (action.type) {
        case CLEAR_ERRORS:
            return defaultErrors;
        case RECEIVE_CARD_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default CardErrorsReducer;