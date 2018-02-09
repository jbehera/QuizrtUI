import { combineReducers, createStore, applyMiddleware } from 'redux';
import { apolloReducer } from 'apollo-cache-redux';
import thunk from 'redux-thunk';
import topicReducer from './reducers/topic';

const reducers = combineReducers({
    apollo: apolloReducer,
    topic: topicReducer
});

const store = applyMiddleware(thunk)(createStore)(reducers);

export default store;