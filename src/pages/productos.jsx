import React from "react";
import Layout from '../components/Layout';
import { graphql } from "gatsby";
import Products from "../components/Products";

const ProductsPage = ({data}) => {
    const products = data.allStripeProduct.nodes;
    return(
        <Layout>
            <Products 
                products={products}
            />
        </Layout>
    );
}
// el nombre de la constante debe ser pageQuery porque de esta manera
// gatsby ejecuta el query al momento de crear la pagina y lo inyecta
// directamente en las props del componenete 
export const pageQuery = graphql`
    query MyQuery {
        allStripeProduct {
            nodes {
              name
              id
              slug
            }
        }
    }
`;

export default ProductsPage;