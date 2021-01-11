import { OPEN_MODAL, CLOSE_MODAL, OPEN_CARD_MODAL } from '../../actions/modal_action';


const modalReducer = (state = null, action) => {
    Object.freeze(state);

    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case OPEN_CARD_MODAL:
            return { modal: action.modal, card: action.card};
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}
export default modalReducer;