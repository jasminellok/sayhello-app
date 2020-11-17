import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors/errors_reducers';

const rootReducers = combineReducers({
    sessions: sessionReducer, 
    entities: entitiesReducer, 
    errors: errorsReducer
})


export default rootReducers;