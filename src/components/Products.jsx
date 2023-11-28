import React from "react";
import ProductCard from "./ProductCard";

const Products = ({products}) => {
    return(
        <ul>
            {
                products.map((product) => {
                    return(
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    );
                })
            }
        </ul>
    );
};

export default Products;