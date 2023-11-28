import React from "react";
import {GoPlus} from 'react-icons/go';
import { IconContext } from "react-icons";

const AddToCartBtn = ({addProduct}) => {
    return(
        <button
            onClick={addProduct}
            className="app-btn text-xl"
        >
            <IconContext.Provider value={{className: "inline-block mr-4 text-xl"}}>
            <GoPlus/>
            </IconContext.Provider>
            Agregar al Carrito
        </button>
    );
};

export default AddToCartBtn;