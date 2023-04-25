import { combineReducers } from "redux";
import authReducer from './modules/auth/reducer';
import examReducer from './modules/exam/reducer';

export default combineReducers({
    auth: authReducer,
    exam: examReducer
});