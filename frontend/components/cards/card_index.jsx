import React from 'react';
//import CreateListItem from './create_list_item'
//import ShowListItem from './show_list_item'
//import Modal from "../modal/modal";


class CardIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchAllCards(this.props.listId)
            .then(() => {
                debugger;
                // let cards = getState().entities.cards;
                // this.setState({ cards })
            })
    }

    render() {
        if (!this.state.cards) return null;
        debugger;
        const cards = this.state.cards;
        const sortedCards = Object.values(cards).sort((a, b) => (a.ord > b.ord) ? 1 : -1);
        const nxtOrd = sortedCards.length + 1;

        const cardItems = sortedCards.map((card, i) => {
            return (<li>{card.title}</li>
                // <ShowListItem key={`list-item${i}`}
                // list={list} editList={updateList} deleteList={deleteList}
                // clearErrors={this.props.clearErrors} />
            )
        });

        return (
            <div className="card-index-items"> checking checking cards
                <section className="list-index-item">
                    {cardItems}
                </section>

                {/* <section className="create-card-container">
                    modal???
                </section> */}

            </div>)
    }

};


export default CardIndex;
