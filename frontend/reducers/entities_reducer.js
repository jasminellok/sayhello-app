
import {combineReducers} from 'redux';
import usersReducer from './parts/users_reducer';
import boardsReducer from './parts/board_reducer';
import listsReducer from './parts/list_reducer';
import cardsReducer from './parts/card_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    boards: boardsReducer,
    lists: listsReducer,
    cards: cardsReducer,

})

export default entitiesReducer;