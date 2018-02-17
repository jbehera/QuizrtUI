import { combineReducers, createStore, applyMiddleware } from 'redux';
import { apolloReducer } from 'apollo-cache-redux';
import thunk from 'redux-thunk';
import topicReducer from './reducers/topic';
import scorecardReducer from './reducers/plscore.js';

const reducers = combineReducers({
    apollo: apolloReducer,
    topic: topicReducer,
    player: scorecardReducer
});

const store = applyMiddleware(thunk)(createStore)(reducers);

export default store;