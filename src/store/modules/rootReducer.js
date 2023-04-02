import { combineReducers } from "redux";
import provaReducer from "./prova/reducer";

export default combineReducers({
     prova: provaReducer,
});