import React from "react";

import { Provider } from "react-redux";
import createStore from "./stage/store.js";


// element hace referencia al root element
// store le dice lo que tiene que compartir con los componentes
export default (({element})=> {
    const store = createStore();
    return <Provider store={store}>{element}</Provider>
})