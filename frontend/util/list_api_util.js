
// api_list GET / api / lists /: id(.: format)                             api / lists#show {: format =>: json }
export const fetchList = (listId) => {
    return $.ajax({
        method: 'GET',
        url: `api/lists/${listId}`
    })
};

// # api_board_lists GET / api / boards /: board_id / lists(.: format)                api / lists#index {: format =>: json } 
export const fetchAllLists = (boardId) => {
    return $.ajax({
        method: 'GET',
        url: `api/boards/${boardId}/lists`
    })
};


// #PATCH / api / lists /: id(.: format)                             api / lists#update {: format =>: json }
export const updateList = (list) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/lists/${list.id}`,
        data: { list }
    })
}

// POST / api / boards /: board_id / lists(.: format)                api / lists#create {: format =>: json }
export const createList = (boardId, list) => {
    return $.ajax({
        method: "POST",
        url: `api/boards/${boardId}/lists`,
        data: { list }
    })
}

// # DELETE / api / lists /: id(.: format)                             api / lists#destroy {: format =>: json }
export const deleteList = (listId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/lists/${listId}`
    })
}

