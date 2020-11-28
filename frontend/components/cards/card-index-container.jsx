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
        this.state = this.props.cards
    }

    componentDidMount() {
        this.props.fetchAllCards(this.props.listId)
            .then(() => {
                let cards = this.props.cards
                this.setState({ cards })
            })
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.cardIds !== prevProps.cardIds) {
    //         let cards = this.props.cards
    //         this.setState({ cards })
    //     }
    // }

    render() {
        if (!this.state.cards) return null;
        const cards = this.state.cards;
        const sortedCards = Object.values(cards).sort((a, b) => (a.ord > b.ord) ? 1 : -1);
        const nxtOrd = sortedCards.length + 1;

        const cardItems = sortedCards.map((card, i) => {
            return (
                <CardIndexItem card={card} deleteCard={this.props.deleteCard} key={`card-index-${i}`} openModal={this.props.openModal} />
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
    return {
        currentUser: state.entities.users[state.session.id],
        listId: props.listId,
        cards: state.entities.cards,
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
