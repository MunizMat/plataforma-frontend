import { combineReducers } from "redux";
import authReducer from './modules/auth/reducer';

export default combineReducers({
    auth: authReducer
});