import { combineReducers } from "redux"; //combineReducers-для объединения redusers
import filters from "./filters.js";
import pizzas from "./pizzas.js";
import cart from "./cart.js";
let rootReducer = combineReducers({
	filters,
	pizzas,
	cart,
});
export default rootReducer;
