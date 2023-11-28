import React from "react";
import Price from "./Price";
import AddToCartConnected from './AddToCartConnected';
const Product = ({product, price}) => {
    const image = price.product.images[0];
    const {name} = product;
    
    return(
        <article className="card">
            <header className="bg-blue-800 p-6 text-center">
                <div className="flex text-left">
                    <div className="flex-1">
                        {
                            (price)&&
                            <img src={image} alt="imagen del producto"/>
                        }
                    </div>
                    <div className="flex-1 p-6">
                        <p className="text-blue-300">Precio</p>
                        <Price
                            product={price}
                            className="text-2xl"
                        />
                    </div>
                </div>
            </header>
            <div className="text-center p-6">
                <h2 className="text-3xl uppercase mb-4">{name}</h2>
                <AddToCartConnected
                    product={price}
                />
            </div>
        </article>
    );
}

export default Product;