import React from "react";
import cardImage from "../images/exitoso.png";
import {useDispatch } from "react-redux";
import { clearShoppingCart } from "../stage/actions/shopping_cart";
const Success = () => {
    const dispatch =  useDispatch();
    dispatch(clearShoppingCart());
    return(
        <div className="card p-12 text-center">
            <img src={cardImage} alt="imagen ilustrativa de tarjeta" className="h-40 mx-auto pb-4"/>
            <p className="text-4xl font-semibold">Tu pago fue procesado</p>
            <p className="m-4">Recibiras en tu correo electronico un comprobante de pago e instrucciones adicionales</p>
        </div>
    );
}

export default Success;
