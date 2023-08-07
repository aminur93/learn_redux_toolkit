import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterAction';

export const Counter = () => {

    const count = useSelector(state => state.count);
    const disptach = useDispatch();

    const handleIncrement = () => {
        disptach(incrementCounter());
    }

    const handleDecrement = () => {
        disptach(decrementCounter());
    }

    const handleReset = () => {
        disptach(resetCounter());
    }

    return (
        <div>
            <h2>Counter App</h2>

            <h3>Count : {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter;
