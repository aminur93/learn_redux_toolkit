const {createStore, combineReducers} = require("redux");

// productReducer

// Products constant
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// product state
const initialProductState = {
    products: ["sugar", "salt"],
    numberofProducts: 2
}

// start product actions
const getProducts = () => {
    return{
        type: GET_PRODUCTS
    }
};

const addProduct = (product) => {
    return{
        type: ADD_PRODUCT,
        payload: product
    };
};
// end product action

// start Product reducer
const productReducer = (state=initialProductState, action) => {

    switch (action.type) {
        case GET_PRODUCTS:
            return{
                ...state,
            };
        case ADD_PRODUCT:
            return{
                products: [...state.products, action.payload],
                numberofProducts: state.numberofProducts + 1
            };
        default:
            return state;
    }
};
// end product reducer

// CartReducer

// Cart constant
const GET_CARTS = "GET_CARTS";
const ADD_CART = "ADD_CART";

// start cart state
const initialCartState = {
    carts: ["sugar"],
    numberofProducts: 1
};
// end cart state

// start cart action
const getCarts = () => {
    return{
        type: GET_CARTS
    };
};

const addCart = (carts) => {
    return{
        type: ADD_CART,
        payload: carts
    };
};
// end cart action

// start Cart reducer
const cartReducer = (state=initialCartState, action) => {

    switch (action.type) {
        case GET_CARTS:
            return{
                ...state,
            };
        case ADD_CART:
            return{
                carts: [...state.carts, action.payload],
                numberofProducts: state.numberofProducts + 1
            };
        default:
            return state;
    }
};
// end Cart reducer

const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

// Store
const store = createStore(rootReducer);

// store subscriber
store.subscribe(() => {
    console.log(store.getState());
})

// store dispatch
store.dispatch(getProducts());
store.dispatch(addProduct("Mobile"));
store.dispatch(addProduct("Computer"));

store.dispatch(getCarts());
store.dispatch(addCart("Mobile"));