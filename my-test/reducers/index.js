import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import items from "./items";
const itemsReducer = combineReducers({items})
export const Store = createStore(itemsReducer, applyMiddleware(thunk))
