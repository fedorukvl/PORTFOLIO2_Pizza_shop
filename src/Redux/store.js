import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk"; //для асинхронных actions в redux
import rootReducer from "./reducers/index.js";
let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //проверка на расширение
let store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk))); //используем несколько middleware

export default store;
