//      api_card GET / api / cards /: id(.: format)                               api / cards#show {: format =>: json }
export const fetchCard = (cardId) => {
    return $.ajax({
        method: 'GET',
        url: `api/cards/${cardId}`
    })
};


// api_list_cards GET / api / lists /: list_id / cards(.: format)                      api / cards#index {: format =>: json }
export const fetchAllCards = (listId) => {
    return $.ajax({
        method: 'GET',
        url: `api/lists/${listId}/cards`
    })
};


//  PATCH / api / cards /: id(.: format)                                 api / cards#update {: format =>: json }
export const updateCard = (card) => {
    ////("ajax -card id",card.id)
    return $.ajax({
        method: "PATCH",
        url: `/api/cards/${card.id}`,
        data: { card }
    })
}

//               POST / api / lists /: list_id / cards(.: format)                    api / cards#create {: format =>: json }
export const createCard = (listId, card) => {
    return $.ajax({
        method: "POST",
        url: `api/lists/${listId}/cards`,
        data: { card }
    })
}


//               DELETE / api / cards /: id(.: format)                                api / cards#destroy {: format =>: json }
export const deleteCard = (cardId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/cards/${cardId}`
    })
}

