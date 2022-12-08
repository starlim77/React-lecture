import axios from "axios";
import React, { useEffect, useState } from "react";

const Test02 = () => {
    const [id, setId] = useState("1");
    const [dto, setDTO] = useState({});
    const [search, setSearch] = useState();

    // const onInput = (e) => {
    //     const { value } = e.target;
    //     setId(value);
    // };
    const onSearch = () => {
        setSearch(id);
    };

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        axios.get(url).then((res) => setDTO(res.data));
    }, [search]); //id의 값이 바뀔 때 마다 호출됨.

    return (
        <div>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)} //onInput 함수 없이
            ></input>
            <button onClick={onSearch}>검색</button>
            <h3>
                {dto.id} : {dto.title}
            </h3>
        </div>
    );
};

export default Test02;
