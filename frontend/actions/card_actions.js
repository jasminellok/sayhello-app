import * as ApiUtil from '../util/card_api_util';

export const REC_CARD = 'REC_CARD';//CARDs
export const REC_ALL_CARDS = 'REC_ALL_CARDS';//CARDs
export const REMOVE_CARD = 'REMOVE_CARD';//CARDs
export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';//errors
export const CLEAR_ERRORS = 'CLEAR_ERRORS';//errors

const recAllCards = (cards) => {
    return {
        cards,
        type: REC_ALL_CARDS
    }
}

const recCard = (card) => {
    return {
        card,
        type: REC_CARD
    }
}

const removeCard = (cardId) => {
    return {
        cardId,
        type: REMOVE_CARD
    }
}

const recCardErrors = (errors) => {
    return {
        type: RECEIVE_CARD_ERRORS,
        errors
    }
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

//thunk actions
export const fetchCard = (cardId) => dispatch => {
    return ApiUtil.fetchCard(cardId)
        .then((card) => dispatch(recCard(card)),
            error => dispatch(recCardErrors(error.responseJSON)));
}

export const fetchAllCards = (listId) => dispatch => {
    return ApiUtil.fetchAllCards(listId)
        .then((cards) => { 
            dispatch(recAllCards(cards)) 
        },
            error => {
                dispatch(recCardErrors(error.responseJSON))
            });
}

export const createCard = (listId, card) => dispatch => {
    return ApiUtil.createCard(listId, card)
        .then((card) => {
            dispatch(recCard(card))
        },
            error => {
                dispatch(recCardErrors(error.responseJSON))
        });
}

export const updateCard = (card) => dispatch => {
    //console.log("card-thunk action", card)
    return ApiUtil.updateCard(card)
        .then((card) => dispatch(recCard(card)),
            error => dispatch(reccardErrors(error.responseJSON))
        );
}

export const deleteCard = (cardId) => dispatch => {
    return ApiUtil.deleteCard(cardId)
        .then((card) => dispatch(removeCard(card)),
            error => dispatch(recCardErrors(error.responseJSON))
        );

}