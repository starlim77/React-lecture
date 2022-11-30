import React from "react";

const Person = ({ name, age }) => {
    //const { name, age } = props;

    return (
        <div>
            나의 이름은 {name}이고 나이는 {age}살 입니다
        </div>
    );
};

export default Person;
