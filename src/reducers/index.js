import { combineReducers } from 'redux';
import postReducer from './postReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    //create a dummy key
    posts: postReducer,
    users: usersReducer
});