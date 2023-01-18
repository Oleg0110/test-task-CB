import { combineReducers } from 'redux';
import { articleReducer } from './articleReducer';

export const rootReducers = combineReducers({
  article: articleReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
