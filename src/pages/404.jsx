import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const Pagina404 = () => {
    return(
        <Layout>
            <h2 className="text-center my-8 text-4xl">Pagina no encontrada</h2>
            <p className="text-center my-8 text-2xl">Lo sentimos, la pagina que esta buscando no existe...</p>
            <Link to="/" className="hover:bg-blue-800 bg-blue-600 p-4">Ir a la pagina principal</Link>
        </Layout>
    );
}

export default Pagina404;