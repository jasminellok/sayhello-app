import { combineReducers } from 'redux';
import sessionReducer from './parts/session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors/errors_reducers';
import uiReducer from './ui/ui_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer,
    ui: uiReducer
})


export default rootReducer;