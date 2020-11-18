import * as ApiUtil from '../util/session_api_util'; 

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const recCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
};

const recSessErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

export const signup = (user) => (dispatch) => {
    return ApiUtil.signup(user)
        .then(user => dispatch(recCurrentUser(user)), 
        error => dispatch(recSessErrors(error.responseJSON))
    );
}

export const login = (user) => (dispatch) => {
    return ApiUtil.login(user)
        .then(user => dispatch(recCurrentUser(user)), 
        error => dispatch(recSessErrors(error.responseJSON))
    );
}

export const logout = () => (dispatch) => {
    return ApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()), 
        error => dispatch(recSessErrors(error.responseJSON))
    );
}


