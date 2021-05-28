import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const someMiddleware = composeWithDevTools();

const store = createStore(rootReducer, someMiddleware);

export default store;
