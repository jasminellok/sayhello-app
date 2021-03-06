
import {combineReducers} from 'redux';
import usersReducer from './parts/users_reducer';
import boardsReducer from './parts/board_reducer';
import listsReducer from './parts/list_reducer';
import cardsReducer from './parts/card_reducer';
import commentsReducer from './parts/comment_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    boards: boardsReducer,
    lists: listsReducer,
    cards: cardsReducer,
    comments: commentsReducer

})

export default entitiesReducer;