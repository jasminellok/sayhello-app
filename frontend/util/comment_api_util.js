export const fetchComment = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/comments/${id}`
    })
};

export const fetchAllComments = (cardId) => {
    return $.ajax({
        method: 'GET',
        url: `api/cards/${cardId}/comments`
    })
};


export const updateComment = (comment) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/comments/${comment.id}`,
        data: { comment }
    })
}

export const createComment = (cardId, comment) => {
    return $.ajax({
        method: "POST",
        url: `api/cards/${cardId}/comments`,
        data: { comment }
    })
}

export const deleteComment = (commentId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/comments/${commentId}`
    })
}
