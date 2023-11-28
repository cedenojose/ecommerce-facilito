import React from "react";
import { Link } from "gatsby";

const ProductCard = ({product}) => {
    return(
        <article className="card p-4">
            <header>
                <h2 
                    className="font-bold uppercase text-2xl">
                        <Link to={`/productos/${product.slug}`}>{product.name}</Link>
                </h2>
            </header>
        </article>
    );
}

export default ProductCard;