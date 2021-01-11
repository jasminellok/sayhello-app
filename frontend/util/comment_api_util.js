//api_comment GET    /api/comments/:id(.:format)                                api/comments#show {:format=>:json}
export const fetchComment = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/comments/${id}`
    })
};


// api_card_comments GET    /api/cards/:card_id/comments(.:format)    api/comments#index {:format=>:json}
export const fetchAllComments = (cardId) => {
    return $.ajax({
        method: 'GET',
        url: `api/cards/${cardId}/comments`
    })
};


//PATCH  /api/comments/:id(.:format)                                api/comments#update {:format=>:json}
export const updateComment = (comment) => {
    ////("ajax -card id",card.id)
    return $.ajax({
        method: "PATCH",
        url: `/api/comments/${comment.id}`,
        data: { comment }
    })
}

//POST   /api/cards/:card_id/comments(.:format)                     api/comments#create {:format=>:json}
export const createComment = (cardId, comment) => {
    return $.ajax({
        method: "POST",
        url: `api/cards/${cardId}/comments`,
        data: { comment }
    })
}

// DELETE /api/comments/:id(.:format)                                api/comments#destroy {:format=>:json}
export const deleteComment = (commentId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/comments/${commentId}`
    })
}
