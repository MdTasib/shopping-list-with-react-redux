import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./shopping-list/reducer";

const store = createStore(reducer, composeWithDevTools());

export default store;
