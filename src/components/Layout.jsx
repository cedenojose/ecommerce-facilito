import React, { Fragment } from "react";
import { SEO } from "./SEO";
import NavConnected from "./NavConnected";

const Layout = (props) => {
    return(
        <Fragment>
            <SEO/>
            <NavConnected />
            {/*
                props.children es un array con todos los elementos 
                hijos del componente que se esta creando
            */}
            <main className="max-w-4xl mx-auto">{ props.children }</main>
        </Fragment>
    );
} 

export default Layout;