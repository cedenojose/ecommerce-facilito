import { combineReducers } from "redux";
import ShoppingCart from "./shopping_cart";

// combinacion de los reducers
export default combineReducers({
    shopping_cart: ShoppingCart
});