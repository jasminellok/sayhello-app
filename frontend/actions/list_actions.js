import * as ApiUtil from '../util/list_api_util';

export const REC_LIST = 'REC_LIST';//LISTs
export const REC_ALL_LISTS = 'REC_ALL_LISTS';//LISTs
export const REMOVE_LIST = 'REMOVE_LIST';//LISTs
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';//errors
export const CLEAR_ERRORS = 'CLEAR_ERRORS';//errors

const recAllLists = (lists) => {
    return {
        lists,
        type: REC_ALL_LISTS
    }
}

const recList = (list) => {
    return {
        list,
        type: REC_LIST
    }
}

const removeList = (listId) => {
    return {
        listId,
        type: REMOVE_LIST
    }
}

const recListErrors = (errors) => {
    return {
        type: RECEIVE_LIST_ERRORS,
        errors
    }
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

//thunk actions
export const fetchlist = (listId) => dispatch => {
    return ApiUtil.fetchlist(listId)
        .then((list) => dispatch(recList(list)),
            error => dispatch(recListErrors(error.responseJSON)));
}

export const fetchAllLists = (boardId) => dispatch => {
    return ApiUtil.fetchAlllists(boardId)
        .then((lists) => dispatch(recAllLists(lists)),
            error => {
                dispatch(recListErrors(error.responseJSON))
            });
}

export const createlist = (boardId, list) => dispatch => {
    return ApiUtil.createlist(boardId, list)
        .then((list) => dispatch(recList(list)),
            error => dispatch(recListErrors(error.responseJSON))
        );
}

export const updatelist = (list) => dispatch => {
    return ApiUtil.updatelist(list)
        .then((list) => dispatch(recList(list)),
            error => dispatch(recListErrors(error.responseJSON))
        );
}

export const deletelist = (listId) => dispatch => {
    return ApiUtil.deletelist(listId)
        .then((list) => dispatch(removeList(list.id)),
            error => dispatch(recListErrors(error.responseJSON))
        );

}