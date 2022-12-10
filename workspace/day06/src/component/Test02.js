import React, { useReducer } from "react";

const initialState = "BLACK";

const reducer = (state, action) => {
    switch (action) {
        case "RESET":
            return initialState;
        default:
            return action;
    }
};

const Test02 = () => {
    const [color, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1 style={{ color: color }}>color : {color}</h1>
            <p>
                <button onClick={() => dispatch("RED")}>빨강</button>
                <button onClick={() => dispatch("GREEN")}>초록</button>
                <button onClick={() => dispatch("BLUE")}>파랑</button>
                <button onClick={() => dispatch("PINK")}>분홍</button>
                <button onClick={() => dispatch("RESET")}>초기화</button>
            </p>
        </div>
    );
};

export default Test02;
