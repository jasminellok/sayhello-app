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
export const fetchList = (listId) => dispatch => {
    return ApiUtil.fetchList(listId)
        .then((list) => dispatch(recList(list)),
            error => dispatch(recListErrors(error.responseJSON)));
}

export const fetchAllLists = (boardId) => dispatch => {
    return ApiUtil.fetchAllLists(boardId)
        .then((lists) => {dispatch(recAllLists(lists))},
            error => {
                dispatch(recListErrors(error.responseJSON))
            });
}

export const createList = (boardId, list) => dispatch => {
    return ApiUtil.createList(boardId, list)
        .then((list) => dispatch(recList(list)),
            error => dispatch(recListErrors(error.responseJSON))
        );
}

export const updateList = (list) => dispatch => {
    return ApiUtil.updateList(list)
        .then((list) => dispatch(recList(list)),
            error => dispatch(recListErrors(error.responseJSON))
        );
}

export const deleteList = (listId) => dispatch => {
    return ApiUtil.deleteList(listId)
        .then((response) => dispatch(removeList(response.id)),
            error => dispatch(recListErrors(error.responseJSON))
        );

}