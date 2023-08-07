const {createStore, applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");

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

// Store
const store = createStore(productReducer, applyMiddleware(logger));

// store subscriber
store.subscribe(() => {
    console.log(store.getState());
})

// store dispatch
store.dispatch(getProducts());
store.dispatch(addProduct("Pen"));