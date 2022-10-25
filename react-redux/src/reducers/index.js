import counterReducer from "./counter";
import loggedReducer from './isLogged';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: counterReducer,
    isLogger: loggedReducer
})

export default rootReducer;