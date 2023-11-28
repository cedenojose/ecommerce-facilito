import { ADD_ITEM, CLEAR_SHOPPING_CART } from "./actionTypes";
/*
formato de las acciones con redux
----------------------------
{type : '', payload: {}}
----------------------------
*/
export const addItem = (product) => {
    return {
        type: ADD_ITEM,
        payload: product,
    }
};

export const clearShoppingCart = () => {
    return ({
        type: CLEAR_SHOPPING_CART,
    })
}