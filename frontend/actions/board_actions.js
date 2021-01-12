import * as ApiUtil from '../util/board_api_util';

export const REC_BOARD = 'REC_BOARD';
export const REC_ALL_BOARDS = 'REC_ALL_BOARDS';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

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

const recBoardErrors = (errors) => {
    return {
        type: RECEIVE_BOARD_ERRORS,
        errors
    }
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}


export const fetchAllBoards = () => dispatch => {
    return ApiUtil.fetchAllBoards()
        .then((boards) => dispatch(recAllBoards(boards)), 
        error => {
            dispatch(recBoardErrors(error.responseJSON))
        });
}

export const fetchBoard = (boardId) => dispatch => {
    return ApiUtil.fetchBoard(boardId)
        .then((board) => dispatch(recBoard(board)),
        error => dispatch(recBoardErrors(error.responseJSON)));
}


export const createBoard = (board) => dispatch => {
    return ApiUtil.createBoard(board)
        .then((board) => dispatch(recBoard(board)),
            error => dispatch(recBoardErrors(error.responseJSON))
        );
}

export const updateBoard = (board) => dispatch => {
    return ApiUtil.updateBoard(board)
        .then((board) => dispatch(recBoard(board)),
            error => dispatch(recBoardErrors(error.responseJSON))
        );
}

export const deleteBoard = (boardId) => dispatch => {
    return ApiUtil.deleteBoard(boardId)
        .then((board) => dispatch(removeBoard(board.id)),
            error => dispatch(recBoardErrors(error.responseJSON))
        );
}

//Board users shares ... need testing and review 
export const createBoardUser = (boardId, email) => dispatch => {
  return ApiUtil.postBoardUser(boardId, email)
        .then((board) => dispatch(recBoard(board)),
            error => dispatch(recBoardErrors(error.responseJSON))
        );
}

// export const removeBoardUser = (boardId, userId) => dispatch => {
//   return ApiUtil.deleteBoardUsers(boardId, userId)
//         .then((board) => dispatch(recBoard(board)),
//             error => dispatch(recBoardErrors(error.responseJSON))
//         );
// }
