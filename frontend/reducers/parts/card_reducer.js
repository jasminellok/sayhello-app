
import { REC_CARD, REC_ALL_CARDS, REMOVE_CARD } from '../../actions/card_actions';

const CardReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = { ...state }

    switch (action.type) {
        case REC_CARD:
            return Object.assign({}, state, { [action.card.id]: action.card })
        case REC_ALL_CARDS:
            return action.cards;
        case REMOVE_CARD:
            delete newState[action.cardId]
            return newState;
        default:
            return state;
    }
};

export default CardReducer;