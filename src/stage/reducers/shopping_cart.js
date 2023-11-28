// un reducer es una funcion que recibe el estado y recibe una accion
// dentro de la funcion se genera un nuevo estado con los cambios que se solicitaron
// se retorna y redux adopta ese como nuevo estado
import { ADD_ITEM, CLEAR_SHOPPING_CART } from "../actions/actionTypes";

// son funciones puras, no se puede modificar el state, se retorna es un nuevo objeto
const shoppingCartReducer = function(state = [], action) {
    const shopping_cart = state;
    if(action.type === ADD_ITEM) {
        // aca se evalua si el producto ya esta en el listado para incrementar la cantidad y no dupplicarlo
        
        // se busca a ver si el producto a agregar ya esta en el carrito 
        const productIfAny = shopping_cart.find(product => product.id === action.payload.id)
        // push modifica el estado original y luego retorna la modificacion
        // concat no modifica el array original
        if(productIfAny) {
            // Genera un nuevo arreglo si el producto ya existia
            return shopping_cart.map((product) => {
                if(product.id === productIfAny.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                    }
                }
                return product;
            })
        }
        // si no estaba en el carrito
        // Agregar el producto e inicializarlo en 1
        return shopping_cart.concat([
            {
                ...action.payload,
                quantity: 1,
            }
        ]);
    };


    if(action.type === CLEAR_SHOPPING_CART) {
        return []
    }

    return shopping_cart;
}
export default shoppingCartReducer;