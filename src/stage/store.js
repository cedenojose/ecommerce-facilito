import { applyMiddleware, compose, legacy_createStore } from "redux";
import reducer from './reducers';
import { load, save } from "redux-localstorage-simple";

const reduxCreateStorage = () => {
    // solucion para compilar el codigo en netlify
    // no puede ejecutar window ya que es una propiedad del navegador y al compilar lo hace con node.js
    let navegadorWindow = null;
    if(typeof window !== 'undefined') {
        navegadorWindow = window.devToolsExtension ? window.devToolsExtension() : f => f
    }
    // el primer parametreo es el reducer, el segundo es el estado inicial del store
    // el ultimo es un middleware que pide la devtool de redux para funcionar, se puede agregar muchas mas
    return(legacy_createStore(
        reducer,
        load(),
        compose(
            navegadorWindow
        )
    ))
};

export default applyMiddleware(
    save()
)(reduxCreateStorage);