import React from 'react';
import Modal from "../modal/modal";

class CardIndexItem extends React.Component {
    handleDelete() {
        //console.log('card delete id', this.props.card.id)
        this.props.deleteCard(this.props.card.id)
        //window.location.reload();
    }

    // componentDidUpdate(prevProps) {
    // }

    render () {
        //console.log("props in create", this.props)
        return (<div className="card-index-item">
            <div className="card-item-info">
                <li>{this.props.card.title}</li>
                <li onClick={() => this.handleDelete()}>Delete</li>
                {/* <li className="index-edit-modal" onClick={() => props.openModal('editCard')}>
                    <p>(edit)</p>
                </li> */}
            </div>
            <Modal card={this.props.card}/>
        </div>)
    }
}
export default CardIndexItem;