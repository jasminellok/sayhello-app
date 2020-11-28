
import { REC_LIST, REC_ALL_LISTS, REMOVE_LIST } from '../../actions/list_actions';

const ListReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = { ...state }

    switch (action.type) {
        case REC_LIST:
            return Object.assign({}, state, { [action.list.id]: action.list })
        case REC_ALL_LISTS:
            return action.lists;
        case REMOVE_LIST:
            delete newState[action.listId]
            console.log("list reducer newState", newState)
            console.log("list reducer action", action)
            return newState;
        default:
            return state;
    }
};

export default ListReducer;