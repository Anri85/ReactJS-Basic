import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./slice";

const App = () => {
    // mengambil nilai state yang ada pada store dengan useSelector
    const count = useSelector((state) => state.counter.value);
    // membuat sebuah dispatch agar dapat menjalankan action
    const dispatch = useDispatch();

    return (
        <div>
            <span>{count}</span>
            <div>
                {/* menjalankan action increment (menambah nilai state +1) */}
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                {/* menjalankan action reset (mereset nilai state) */}
                <button aria-label="Reset value" onClick={() => dispatch(reset())}>
                    Reset
                </button>
                {/* menjalankan action decrement (mengurangi nilai state -1) */}
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default App;
