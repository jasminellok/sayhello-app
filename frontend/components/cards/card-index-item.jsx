import React from 'react';
import Modal from "../modal/modal";

const CardIndexItem = props => {


    return (<div className="card-index-item">
        <div className="card-item-info">
            <li className="card-item-title">{props.card.title}</li>
            {/* <li className="index-edit-modal" onClick={() => props.openModal('editCard')}>
                <div>Edit</div>
            </li> */}
        </div>
        <Modal card={props.card}/>
    </div>)
}
export default CardIndexItem;