//keep track of any error messages

//The sessionErrorsReducer should listen for 2 action types and respond to them like so:
// RECEIVE_SESSION_ERRORS - sets errors to the action's errors
// RECEIVE_CURRENT_USER - clears the errors
//this grabs the constants from action to know what to do with type when thunk actions sends action here they will identify type and what todo

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default sessionErrorsReducer;