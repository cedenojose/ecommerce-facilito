import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import Product from "../components/Product";

const ProductTemplate = ({data}) => {
  const product = data.stripeProduct;
  const price = data.stripePrice;

    return(
        <Layout>
          <Product
            product={product}
            price={price}
          />
        </Layout> 
    );
}

// la variable $id es pasada desde context en gatsby-node.js
export const pageQuery = graphql`
  query ($id : String) {
    stripeProduct(id: { eq: $id }){
      name
      slug
      id
    }
    stripePrice(product: {id: {eq: $id}}) {
      product {
        created
        id
        name
        images
      }
      unit_amount
      currency
      id
    }
  }
`;


// export const pageQuery = graphql`
//   query($id : String) {
//     stripeProduct(id: { eq: $id }){
//       name
//       slug
//     }
    // allStripeSku(filter: {product: {id: {eq: $id}}}) {
    //   nodes {
    //     image
    //     id
    //     attributes {
    //       name
    //     }
    //     price
    //     currency
    //     created
    //   }
    // }
//   }
// `;

export default ProductTemplate;