import React from "react";
import Layout from "../components/Layout";
import { shallowEqual, useSelector } from "react-redux";
import ShoppingCart from "../components/ShoppingCart";
const Carrito = (props) => {
    // conectarse a redux con hooks
    const shoppingCart = useSelector(state => state.shopping_cart, shallowEqual );
    return(
        <Layout>
            <ShoppingCart shoppingCart={shoppingCart}/>
        </Layout>
    );
};

export default Carrito;