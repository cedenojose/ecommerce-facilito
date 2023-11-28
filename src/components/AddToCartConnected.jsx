import React from "react";
// para recibir la informacion del store
import { connect, useDispatch } from "react-redux";
import { addItem} from '../stage/actions/shopping_cart';
import AddToCartBtn from "./AddToCartBtn";

const AddToCartConnected = ({product}) => {
    const dispatch = useDispatch();

    const addProductToCart = (event) => {
        dispatch(addItem(product));
    } 
    return(
        <AddToCartBtn
            addProduct={addProductToCart}
        />
    );
};

// conect recibe el state y devuelve y retorna los elementos del state que se quieren (state) => state.shopping_cart
// el segundo argumento son actionCreator
export default connect(null, {})(AddToCartConnected);