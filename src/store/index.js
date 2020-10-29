import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import persistedReducers from '../rootReducer';

export default store = createStore(
    persistedReducers,
    {}, //state
    compose(
    applyMiddleware(thunk),
    )
   );