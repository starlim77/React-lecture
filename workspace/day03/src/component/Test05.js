import React, { useState } from "react";
import Fruit from "./Fruit";
import Name from "./Name";
import Output from "./Output";

const Test05 = () => {
    const [name, setName] = useState("홍길동");
    const [fruit, setFruit] = useState("사과");

    const onName = (e) => {
        const { value } = e.target;
        setName(value);
    };
    const onFruit = (e) => {
        const { value } = e.target;
        setFruit(value);
    };

    return (
        <div>
            <Name name={name} onName={onName}></Name>
            <br></br>
            <Fruit fruit={fruit} onFruit={onFruit}></Fruit>
            <br></br>
            <Output name={name} fruit={fruit}></Output>
        </div>
    );
};

export default Test05;
