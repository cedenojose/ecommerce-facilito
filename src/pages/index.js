import React from "react"
import Layout from "../components/Layout";

const Home = (props) => {
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: process.env.STRIPE_SECRET_KEY,
  // };
  return(
    <Layout>
      {/* todo lo que se coloque dentro de layuout estara en la etiqueta children */}
      <div className="text-3xl font-bold text-center">Carrito de compras con React, Gatsby y Stripe</div>
    </Layout>
  );
}

export default Home;