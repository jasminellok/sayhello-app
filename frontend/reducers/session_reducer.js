import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
//takes actions from session actions (regular actions) to figure out what to do 

const nullSession = {
    currUserId: null
}; //to logout user or default action 

const sessionReducer = (state = nullSession, action) => {//action passed in has useer info
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER: //if we are getting a user, then sessions need to sign them in 
            return Object.assign({}, { currUserId: action.user.id })//shallow dupe
        case LOGOUT_CURRENT_USER:
            return nullSession;
        default:
            return state;
    }
}
export const sessionReducer;