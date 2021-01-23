export const fetchBoard = boardId => {
    return $.ajax({
        method: 'GET',
        url: `api/boards/${boardId}`
    })
};

export const fetchAllBoards = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/boards'
    })
};

export const updateBoard = (board) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/boards/${board.id}`,
        data: { board }
    })
}

export const createBoard = (board) => {
    return $.ajax({
        method: "POST",
        url: '/api/boards',
        data: { board }
    })
}

export const deleteBoard = (boardId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/boards/${boardId}`
    })
}

// to add board_user
export const postBoardUser = (boardId, email) => { 
    return $.ajax({ 
        method: 'POST',
        url: '/api/board_shares',
        data: {board_id: boardId, email},
    })
};
