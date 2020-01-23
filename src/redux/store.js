import { createStore, combineReducers } from 'redux';
import results from './reducer/results';
import suggestions from './reducer/suggestions'
import currentItem from './reducer/currentItem'

const reducer = combineReducers({
    results,
    suggestions,
    currentItem,
});

const store = createStore(reducer);

export default store;