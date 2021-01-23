import { combineReducers, createStore } from "redux";
import availability from "./availability/reducer";
import auth from "./auth/reducer";

const reducers = combineReducers({ auth, availability });
const store = createStore(reducers, (window as any)?.__REDUX_DEVTOOLS_EXTENSION__());
export default store;

