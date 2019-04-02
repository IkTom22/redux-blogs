import { combineReducers } from 'redux';
import postReducer from './postReducer';
export default combineReducers({
    //create a dummy key
    posts: postReducer
});