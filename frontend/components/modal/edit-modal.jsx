import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_action';
import BoardEditContainer from '../boards/bfrom_edit_container';

function EditModal({ modal, editBoard, closeModal }) {
    if (!modal) return null;

    let component;
    switch (modal) {
        case 'editBoard':
            component = <BoardEditContainer editBoard={editBoard} />;
            break;

        default:
            return null;
    }

    return (
        <div className="edit-modal-background" onClick={closeModal}>
            <div className="edit-modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );

}


const mstp = (state, props) => {
    return {
        modal: state.ui.modal,
        editBoard: props.board ? props.board : null
    };
};

const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
};


export default connect(mstp, mdtp)(EditModal);
