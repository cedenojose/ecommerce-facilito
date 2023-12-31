import React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
const NavConnected = ({shopping_cart}) => {
    return(
        <Nav
            shopping_cart={shopping_cart}
        />
    );
};
const mapStateProps = ({shopping_cart}) => ({shopping_cart});
export default connect(mapStateProps)(NavConnected);