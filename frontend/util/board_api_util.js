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

        // #        api_boards GET / api / boards(.: format)                                  api / boards#index {: format =>: json }
        // #                   POST / api / boards(.: format)                                api / boards#create {: format =>: json }
        // #         api_board GET / api / boards /: id(.: format)                           api / boards#show {: format =>: json }
        // #                   PATCH / api / boards /: id(.: format)                          api / boards#update {: format =>: json }
        // #                   PUT / api / boards /: id(.: format)                           api / boards#update {: format =>: json }
        // #                   DELETE / api / boards /: id(.: format)                      api / boards#destroy {: format =>: json }