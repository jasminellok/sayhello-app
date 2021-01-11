import React from 'react';


class CardIndexItem extends React.Component {
    handleDelete() {
        this.props.deleteCard(this.props.card.id)
    }

    render () {
        return (<div className="card-index-item">
            <div className="card-item-info">
                <li onClick={() => this.props.openCardModal('editCard', this.props.card)}>{this.props.card.title}</li>
                <li onClick={() => this.handleDelete()}>Delete</li>
                
            </div>

        </div>) 
    }
}
export default CardIndexItem;