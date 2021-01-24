import { combineReducers, createStore } from "redux";
import availability from "./availability/reducer";
import auth from "./auth/reducer";
import orders from "./orders/reducer";

function reduxDevtoolsExtension() {
    const func = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
    return func ? func() : undefined
}

const reducers = combineReducers({ auth, availability, orders });
export const store = createStore(reducers, reduxDevtoolsExtension());
export default store;

