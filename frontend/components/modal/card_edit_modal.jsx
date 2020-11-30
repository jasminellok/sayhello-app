import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_action';
import CardEditContainer from '../cards/card-edit-container';

function Modal({ modal, card, closeModal }) {
    if (!modal) return null;

    let component;
    switch (modal) {
        case 'editCard':
            component = <CardEditContainer card={card}/>;
            break;
        default:
            return null;
    }

    return (
        <div className="edit-card-modal-background" onClick={closeModal}>
            <div className="edit-card-modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );

}


const mstp = (state, props) => {
    return {
        modal: state.ui.modal,
        card: props.card ? props.card : null
    };
};

const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
};


export default connect(mstp, mdtp)(Modal);
