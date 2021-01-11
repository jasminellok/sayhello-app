export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_CARD_MODAL = "OPEN_CARD_MODAL";

export const openModal = (modal) => {
    return {
        type: OPEN_MODAL,
        modal: modal,
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}

export const openCardModal = (modal, card) => {
    return {
        type: OPEN_CARD_MODAL,
        modal: modal,
        card
    }
}