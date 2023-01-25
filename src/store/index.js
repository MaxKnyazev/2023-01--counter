import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import {countReducer} from './countStore/countReducer';
import {todoReducer} from './todoStore/todoReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  counter: countReducer,
  todo: todoReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));