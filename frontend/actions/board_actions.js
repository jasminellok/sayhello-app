import * as ApiUtil from '../util/board_api_util';

export const REC_BOARD = 'REC_BOARD';//boards
export const REC_ALL_BOARDS = 'REC_ALL_BOARDS';//boards
export const REMOVE_BOARD = 'REMOVE_BOARD';//boards
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';//errors
export const CLEAR_ERRORS = 'CLEAR_ERRORS';//errors

const recAllBoards = (boards) => {
    return {
        boards,
        type: REC_ALL_BOARDS
    }
}

const recBoard = (board) => {
    return {
        board,
        type: REC_BOARD
    }
}

const removeBoard = (boardId) => {
    return {
        boardId,
        type: REMOVE_BOARD
    }
}

const recErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

//thunk actions

export const fetchAllBoards = () => dispatch => {
    return ApiUtil.fetchAllBoards()
        .then((boards) => dispatch(recAllBoards(boards)),
            error => dispatch(recErrors(error.responseJSON))
        );
}

export const fetchBoard = (boardId) => dispatch => {
    return ApiUtil.fetchBoard(boardId)
        .then((post) => dispatch(recBoard(board)),
            error => dispatch(recErrors(error.responseJSON))
        );
}


export const createBoard = (board) => dispatch => {
    return PostApiUtil.createBoard(board)
        .then((board) => dispatch(recBoard(board)),
            error => dispatch(recErrors(error.responseJSON))
        );
}

export const updateBoard = (board) => dispatch => {
    return PostApiUtil.updateBoard(board)
        .then((board) => dispatch(recBoard(board)),
            error => dispatch(recErrors(error.responseJSON))
        );
}

export const deleteBoard = (boardId) => dispatch => {
    return PostApiUtil.deleteBoard(boardId)
        .then((board) => dispatch(removeBoard(board.id)),
            error => dispatch(recErrors(error.responseJSON))
        );
    
}