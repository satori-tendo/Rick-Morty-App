import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { characterReducer } from './characterReducer';

const rootReducer = combineReducers({
    characters: characterReducer,
})

export const store = createStore(rootReducer,
        composeWithDevTools(applyMiddleware(thunk)))

