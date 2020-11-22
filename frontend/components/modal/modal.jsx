import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_action';
import BoardCreateContainer from '../boards/bform_create_container';
//import BoardEditContainer from '../boards/bfrom_edit_container';

function Modal({ modal, editBoard, closeModal }) {
    if (!modal) return null;

    let component;
    switch (modal) {
        case 'createBoard':
            component = <BoardCreateContainer />;
            break;
        // case 'editBoard':
        //     component = <BoardEditContainer editBoard={editBoard}/>;
        //     break;

        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );

}


const mstp = (state, props) => {
    return {
        modal: state.ui.modal,
        //editBoard: props.board ? props.board : null
    };
};

const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
};


export default connect(mstp, mdtp)(Modal);
