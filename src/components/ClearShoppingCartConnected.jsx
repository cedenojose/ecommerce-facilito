import React from "react";
import ClearShoppingCart from "./ClearShoppingCart";
import { useDispatch } from "react-redux";
import { clearShoppingCart } from "../stage/actions/shopping_cart";

const ClearShoppingCartConnected = () => {
    const dispatch = useDispatch();

    const clear = () => {
        dispatch(clearShoppingCart());
    }
    return(
        <ClearShoppingCart
            clear={clear}
        />
    );
}

export default ClearShoppingCartConnected;