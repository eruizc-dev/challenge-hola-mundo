import { combineReducers, createStore } from "redux";
import auth from "./auth/reducer";

const reducers = combineReducers({ auth });
const store = createStore(reducers, (window as any)?.__REDUX_DEVTOOLS_EXTENSION__());
export default store;


