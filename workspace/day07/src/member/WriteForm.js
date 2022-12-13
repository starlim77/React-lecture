import React, { useState, useCallback } from "react";

const WriteForm = () => {
    const [member, setMember] = useState(
        () => JSON.parse(localStorage.getItem("member")) || []
    );

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const onSave = () => {
        const newData = { id, name, password };
        setMember(member.concat(newData));
        localStorage.setItem("member", JSON.stringify(member.concat(newData)));
        alert("등록 완료");
    };

    return (
        <div className="page">
            <h2>회원등록</h2>
            <div>
                <span>아이디 </span>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                ></input>
                <br></br>
                <span>이름 </span>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <br></br>
                <span>비밀번호 </span>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <br></br>
                <input onClick={onSave} type="button" value="등록"></input>
            </div>
        </div>
    );
};

export default WriteForm;
