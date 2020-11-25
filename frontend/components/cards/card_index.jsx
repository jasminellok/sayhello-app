import React from 'react';
import CreateCardCont from "./card-create-container";
//import CreateListItem from './create_list_item'
//import ShowListItem from './show_list_item'
//import Modal from "../modal/modal";


class CardIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.cards
    }

    componentDidMount() {
        this.props.fetchAllCards(this.props.listId)
            .then(() => {
                let cards = getState().entities.cards;
                this.setState({ cards })
            })
    }

    render() {
        if (!this.state.cards) return null;
        const cards = this.state.cards;
        const sortedCards = Object.values(cards).sort((a, b) => (a.ord > b.ord) ? 1 : -1);
        const nxtOrd = sortedCards.length + 1;

        const cardItems = sortedCards.map((card, i) => {
            return (<li key={`card-index-${i}`}>{card.title}</li>
                // < edit card modal/ show/>
            )
        });

        return (
            <div className="card-index-items">
                <section className="list-index-item">
                    {cardItems}
                </section>
                <section className="create-card-cont">
                    <CreateCardCont listId={this.props.listId} ord={nxtOrd}/>
                </section>
            </div>)
    }

};


export default CardIndex;
