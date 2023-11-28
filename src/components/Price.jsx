import React from "react";

const Price = ({product, className}) => {
    const {currency, unit_amount} = product;
    return(
        <span
            className={`inline-block uppercase ${className}`}
        >{unit_amount / 100} <span className="text-sm">{currency}</span></span>
    );
}

export default Price;