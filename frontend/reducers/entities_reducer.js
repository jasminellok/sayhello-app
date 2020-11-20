
import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import boardsReducer from './board_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    boards: boardsReducer
})

export default entitiesReducer;