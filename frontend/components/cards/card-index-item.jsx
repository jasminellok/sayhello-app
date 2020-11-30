import React from 'react';
import CardEditModal from "../modal/card_edit_modal";

class CardIndexItem extends React.Component {
    handleDelete() {
        this.props.deleteCard(this.props.card.id)
    }

    render () {
        return (<div className="card-index-item">
            <div className="card-item-info">
                <li onClick={() => this.props.openModal('editCard')}>{this.props.card.title}</li>
                <li onClick={() => this.handleDelete()}>Delete</li>
            </div>
            <CardEditModal card={this.props.card}/>
        </div>)
    }
}
export default CardIndexItem;