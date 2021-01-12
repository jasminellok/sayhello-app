export const fetchCard = (cardId) => {
    return $.ajax({
        method: 'GET',
        url: `api/cards/${cardId}`
    })
};


export const fetchAllCards = (listId) => {
    return $.ajax({
        method: 'GET',
        url: `api/lists/${listId}/cards`
    })
};


export const updateCard = (card) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/cards/${card.id}`,
        data: { card }
    })
}

export const createCard = (listId, card) => {
    return $.ajax({
        method: "POST",
        url: `api/lists/${listId}/cards`,
        data: { card }
    })
}


export const deleteCard = (cardId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/cards/${cardId}`
    })
}

