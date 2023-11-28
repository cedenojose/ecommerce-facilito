import React from "react";
import { IconContext } from "react-icons";
import {FiDelete} from 'react-icons/fi';
const ClearShoppingCart = ({clear}) => {
    return(
        <button className="app-btn-flat" onClick={clear}>
            vaciar el carrito
            <IconContext.Provider value={{className: "inline-block ml-4 text-xl"}}>
                <FiDelete></FiDelete>
            </IconContext.Provider>
        </button>
    );
}

export default ClearShoppingCart;