import React from "react";
import CartItem from "./CartItem";
import Total from "./Total";
import ClearShoppingCartConnected from "./ClearShoppingCartConnected";
import CheckoutForm from "./CheckoutForm";
// import shopping_cart from "../stage/reducers/shopping_cart";

const ShoppingCart = ({shoppingCart}) => {
    return(
        <div className="card">
            <div className="flex items-end bg-blue-700">
                <div className="flex-1">
                    <header className="flex p-6 items-end">
                        <h2 className="text-3xl flex-1 font-semibold">Mi carrito de compras</h2>
                        <div>
                            <ClearShoppingCartConnected/>
                        </div>
                    </header>
                    <ul>
                        {
                            shoppingCart.map((product) => {
                                return(
                                    <CartItem 
                                        key={product.product.id}
                                        product={product}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="w-1/3 text-right p-12 font-semibold">
                    <Total
                        shoppingCart={shoppingCart}
                    />
                </div>
            </div>
            <div className="p-6">
                <CheckoutForm
                    shoppingCart={shoppingCart}
                />
            </div>
        </div>
    );
};

export default ShoppingCart;