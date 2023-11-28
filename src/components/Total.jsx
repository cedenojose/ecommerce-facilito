import React from "react";
import Price from "./Price";

const Total = ({shoppingCart}) => {
    const total = shoppingCart.reduce((total, product) => {
        return(
            (product.unit_amount * product.quantity) + total
        );
    }, 0);
    const product = {
        unit_amount:total,
        currency: 'MXN'
    };

    return(
        <div>
            <Price
                product={product}
                className="text-2xl"

            />
        </div>
    );
}

export default Total;