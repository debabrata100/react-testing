import { combineReducers } from 'redux';
import commentReducer from './comments';

export default combineReducers({
    comments: commentReducer
})