import { combineReducers, createStore } from "redux";
import availability from "./availability/reducer";
import auth from "./auth/reducer";
import orders from "./orders/reducer";

const reducers = combineReducers({ auth, availability, orders });
export const store = createStore(reducers, (window as any)?.__REDUX_DEVTOOLS_EXTENSION__());
export default store;

