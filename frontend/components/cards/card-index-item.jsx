import React from 'react';
import Modal from "../modal/modal";

const PostIndexItem = props => {
    debugger;
    return (<div className="card-index-items">
        <li>{props.card.title}</li>
        <li className="index-edit-modal" onClick={() => props.openModal('editCard')}>
            <p>(edit)</p>
        </li>
        <Modal card={props.card}/>
    </div>)
}
export default PostIndexItem;