import { connect } from 'react-redux';
import CardIndex from './card_index';
import { fetchAllCards, deleteCard, createCard, updateCard, clearErrors } from '../../actions/card_actions';
import { withRouter } from "react-router";
import { openModal } from '../../actions/modal_action';

const mstp = (state, props) => {
    return {
        currentUser: state.entities.users[state.session.id],
        listId: props.listId,
        cards: state.entities.cards
    };
};

const mdtp = dispatch => {
    return {
        fetchAllCards: (listId) => dispatch(fetchAllCards(listId)),
        deleteCard: (cardId) => dispatch(deleteCard(cardId)),
        createCard: (listId, card) => dispatch(createCard(listId, card)),
        updateCard: (cardId) => dispatch(updateCard(cardId)),
        clearErrors: () => {return dispatch(clearErrors())},
        openModal: (modal) => dispatch(openModal(modal))
    }
};


export default withRouter(connect(mstp, mdtp)(CardIndex));
