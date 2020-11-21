
import {combineReducers} from 'redux';
import usersReducer from './parts/users_reducer';
import boardsReducer from './parts/board_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    boards: boardsReducer
})

export default entitiesReducer;