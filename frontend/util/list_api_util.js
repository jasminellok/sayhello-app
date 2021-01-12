
export const fetchList = (listId) => {
    return $.ajax({
        method: 'GET',
        url: `api/lists/${listId}`
    })
};

export const fetchAllLists = (boardId) => {
    return $.ajax({
        method: 'GET',
        url: `api/boards/${boardId}/lists`
    })
};


export const updateList = (list) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/lists/${list.id}`,
        data: { list }
    })
}

export const createList = (boardId, list) => {
    return $.ajax({
        method: "POST",
        url: `api/boards/${boardId}/lists`,
        data: { list }
    })
}

export const deleteList = (listId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/lists/${listId}`
    })
}

