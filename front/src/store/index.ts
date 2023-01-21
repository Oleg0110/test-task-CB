import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { rootReducers } from './reducers';

export const store = createStore(rootReducers, applyMiddleware(thunk));
