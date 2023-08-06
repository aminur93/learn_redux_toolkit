// state - count : 0
// action - increment, decrement, reset
// reducer
// store

const {createStore} = require("redux");

// Define Constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const INCREMENT_USER = "INCREMENT_USER";

// state
const initialState = {
    users: ["pavel"],
    user_count: 1,
    count: 0
}

const incrementCounterAction = () => {
    return{
        type: INCREMENT
    };
};

const decrementCounterAction = () => {
    return{
        type: DECREMENT
    };
};

const resetCounterAction = () => {
    return{
        type: RESET
    };
};

const incrementCounterByValue = (value) => {
    return{
        type: INCREMENT_BY_VALUE,
        payload: value
    };
};

const incrementUser = (user) => {
    return{
        type: INCREMENT_USER,
        payload: user
    };
};

// creating reducer
const counterReducer = (state=initialState, action) => {

    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1
            };

        case DECREMENT:
            return{
                ...state,
                count: state.count - 1
            };

        case RESET:
            return{
                ...state,
                count: 0
            };

        case INCREMENT_BY_VALUE:
            return{
                ...state,
                count: state.count + action.payload
            };

        case INCREMENT_USER:
            return{
                ...state,
                users: [...state.users, action.payload],
                user_count: state.user_count + 1
            };
        default:
            state;
    }
};

// creating store
const store = createStore(counterReducer);

// store subscriber
store.subscribe(() => {
    console.log(store.getState());
})

// store dispatch
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(resetCounterAction());
// store.dispatch(incrementCounterAction());
//store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementUser("monir"));
store.dispatch(incrementUser("biplob"));