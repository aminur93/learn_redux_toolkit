const {createStore} = require("redux");

// Defining Constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// state
const initialCounterSate = {
    count: 0
}


// action - object - type, payload

//Incriment Counter
const incrementCounter = () => {
    return {
        type : INCREMENT,
    };
};

//Decrement Counter
const decrementCounter = () => {
    return {
        type : DECREMENT,
    };
};

// create reducer for counter
const counterReducer = (state=initialCounterSate, action) => {

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            state;
    }
};

// create store
const store = createStore(counterReducer);

// subscribe store
store.subscribe(() => {
    console.log(store.getState());
})

// dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());


// 1. State
// 2. dispatch action
// 3. reducer
// 4. store - getState(), dispatch(), subscribe()

