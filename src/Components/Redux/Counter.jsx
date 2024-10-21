import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    reset,
    incrementByAmount,
    decreaseByAmount,
} from "./counterSlice";

const Counter = () => {
    const [add, setAddAmount] = useState(0); // State to store the amount to add
    const [minus, setMinusAmount] = useState(0); // State to store the amount to subtract
    const count = useSelector((state) => state.counter.value); // Access counter value from Redux store
    const dispatch = useDispatch();

    // Increment by 1
    function addCount() {
        if (count < 10) {
            dispatch(increment());
        } else {
            alert("Count reached maximum clicks!");
        }
    }

    // Decrement by 1
    function minusCount() {
        if (count > 0) {
            dispatch(decrement());
        } else {
            alert("Count cannot be a negative number");
        }
    }

    // Reset count
    function resetCount() {
        dispatch(reset());
    }

    // Increment by the entered amount
    function increaseByAmount() {
        const addValue = Number(add) || 0; // Convert input to number
        dispatch(incrementByAmount(addValue)); // Dispatch action with the value
    }

    // Decrease by the entered amount
    function decreaseByAmountHandler() {
        const subValue = Number(minus) || 0; // Convert input to number
        dispatch(decreaseByAmount(subValue)); // Dispatch action with the value
    }

    // Reset the state of the amount inputs
    function resetState() {
        setAddAmount(0);
        setMinusAmount(0);
        dispatch(reset());
    }

    return (
        <div className="max-w-lg p-8 mx-auto shadow-lg rounded-3xl bg-slate-600">
    <div className="p-6 text-center rounded-3xl bg-slate-500">
        <h1 className="mb-6 text-4xl font-bold text-blue-700">Count: {count}</h1>
        <div className="flex justify-center space-x-4">
            <button
                className="p-3 text-white transition duration-300 ease-in-out bg-black rounded-full hover:bg-blue-700"
                onClick={addCount}
            >
                Addition
            </button>
            <button
                className="p-3 text-white transition duration-300 ease-in-out bg-black rounded-full hover:bg-red-700"
                onClick={minusCount}
            >
                Subtraction
            </button>
            <button
                className="p-3 text-white transition duration-300 ease-in-out bg-black rounded-full hover:bg-gray-700"
                onClick={resetCount}
            >
                Reset
            </button>
        </div>
    </div>
    <div className="mt-8 text-center">
        <div className="mb-4">
            <input
                className="w-40 p-2 text-black rounded-md bg-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                value={add}
                onChange={(e) => setAddAmount(e.target.value)}
            />
        </div>
        <button
            className="p-3 m-2 text-white transition duration-300 ease-in-out bg-black rounded-full hover:bg-green-700"
            onClick={increaseByAmount}
        >
            Add By Amount
        </button>
        <div className="mb-4">
            <input
                className="w-40 p-2 text-black rounded-md bg-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                type="number"
                value={minus}
                onChange={(e) => setMinusAmount(e.target.value)}
            />
        </div>
        <button
            className="p-3 m-2 text-white transition duration-300 ease-in-out bg-black rounded-full hover:bg-orange-700"
            onClick={decreaseByAmountHandler}
        >
            Minus By Amount
        </button>
        <div className="mt-4">
            <button
                className="p-3 m-2 text-white transition duration-300 ease-in-out bg-black rounded-full hover:bg-gray-700"
                onClick={resetState}
            >
                Reset State
            </button>
        </div>
    </div>
</div>

    );
};

export default Counter;
