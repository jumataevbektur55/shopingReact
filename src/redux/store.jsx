import { applyMiddleware, createStore } from "redux";
import { Reducer } from "./reduce";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(Reducer, composeWithDevTools());
