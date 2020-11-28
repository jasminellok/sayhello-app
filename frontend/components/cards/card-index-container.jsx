import React from 'react';
import { connect } from 'react-redux';
import { fetchAllCards, deleteCard, createCard, updateCard, clearErrors } from '../../actions/card_actions';
import { withRouter } from "react-router";
import { openModal } from '../../actions/modal_action';
import CreateCardCont from "./card-create-container";
import CardIndexItem from "./card-index-item";

class CardIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: this.props.cards
        }
    }

    componentDidMount() {
        this.props.fetchAllCards(this.props.listId)
            .then(() => {
                let cards = this.props.cards
                this.setState({ cards })
            })
    }

    componentDidUpdate(prevProps) {
        // console.log("cdm this.props", this.props)
        // console.log("cdm prevprops", prevProps)
        if (this.props.cardIds !== prevProps.cardIds) {
            let cards = this.props.cards
            this.setState({ cards })
        }
    }

    render() {
        if (!this.state.cards) return null;
        const cards = this.state.cards;
        const sortedCards = cards.sort((a, b) => (a.id > b.id) ? 1 : -1);
        const nxtOrd = sortedCards.length + 1;

        const cardItems = sortedCards.map((card, i) => {
            return (
                <CardIndexItem card={card} 
                deleteCard={this.props.deleteCard} 
                key={`card-index-${i}`} 
                openModal={this.props.openModal} />
            )
        });

        return (
            <div className="card-index-items">
                {cardItems}
                <CreateCardCont listId={this.props.listId} ord={nxtOrd} />
            </div>)
    }

};

const mstp = (state, props) => {
    // console.log("mstp card state", state)
    // console.log("mdtp card props", props)
    return {
        currentUser: state.entities.users[state.session.id],
        listId: props.listId,
        cards: Object.values(state.entities.cards).filter(card => card.list_id === listId),
        cardIds: Object.keys(state.entities.cards)
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
