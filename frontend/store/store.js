// Set up a configureStore method for initializing our Store:

// Import createStore and applyMiddleware from the redux library.
// Import our rootReducer, redux - logger, and thunk middleware.
// Write it yourself, or import the library.If you use the library don't forget to install it!
// Define a new function, configureStore, that accepts a single argument, preloadedState.
// configureStore should return a new store with the rootReducer and preloadedState passed in.

import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => createStore(
    rootReducer, preloadedState, applyMiddleware(thunk, logger)
)

export default configureStore;