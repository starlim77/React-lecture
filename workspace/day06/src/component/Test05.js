import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

const initialState = {
    data: {},
    error: null,
    loading: true,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS":
            return {
                data: action.payload,
                error: null,
                loading: false,
            };
        case "ERROR":
            return {
                data: {},
                error: "에러...",
                loading: true,
            };
        default:
            return state;
    }
};

const Test05 = () => {
    const [id, setId] = useState(1);

    const [state, dispatch] = useReducer(reducer, initialState);

    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;

    useEffect(() => {
        onSearch();
    }, []);

    const onSearch = () => {
        axios
            .get(url)
            .then((res) => {
                dispatch({ type: "SUCCESS", payload: res.data });
            })
            .catch((error) => dispatch({ type: "ERROR" }));
    };

    return (
        <div>
            <h3>
                ID 입력(1~5000) :{" "}
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                ></input>
                <button onClick={onSearch}>검색</button>
            </h3>
            <h3>
                {state.loading || <img src={state.data.thumbnailUrl}></img>}
                {state.data && state.loading ? "로딩 중" : state.data.title}
            </h3>
            <p>{state.error ? state.error : null}</p>
        </div>
    );
};

export default Test05;
