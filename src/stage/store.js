import { applyMiddleware, compose, legacy_createStore } from "redux";
import reducer from './reducers';
import { load, save } from "redux-localstorage-simple";

const reduxCreateStorage = () => {
    // el primer parametreo es el reducer, el segundo es el estado inicial del store
    // el ultimo es un middleware que pide la devtool de redux para funcionar, se puede agregar muchas mas
    return(legacy_createStore(
        reducer,
        load(),
        compose(
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    ))
};

export default applyMiddleware(
    save()
)(reduxCreateStorage);