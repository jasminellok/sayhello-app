import React from 'react';
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
                let cards = getState().entities.cards;
                this.setState({ cards })
            })
    }

    // componentDidUpdate(prevProps) {
    //     // const prevLength = Object.keys(this.prevProps.cards).length
    //     // const newLength = Object.keys(this.props.cards).length
    //     // if (prevLength) {
    //     //     if (prevLength !== newLength) {
    //     //         this.props.fetchAllCards(this.props.listId)
    //     //     }
    //     // } 
    // }

    render() {
        if (!this.state.cards) return null;
        const cards = this.state.cards;
        const sortedCards = Object.values(cards).sort((a, b) => (a.ord > b.ord) ? 1 : -1);
        const nxtOrd = sortedCards.length + 1;

        const cardItems = sortedCards.map((card, i) => {
            return (
                <CardIndexItem card={card} key={`card-index-${i}`} openModal={this.props.openModal}/>
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
