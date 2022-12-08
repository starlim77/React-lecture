import React from "react";
import img01 from "../img/image01.jpeg";
import img02 from "../img/image02.jpeg";
import img03 from "../img/image03.jpeg";
import img04 from "../img/image04.jpeg";

const Test09 = () => {
    return (
        <div>
            <img src={img01} style={{ height: 300 }}></img>
            <img src={img02} style={{ height: 300 }}></img>
            <img src={img03} style={{ height: 300 }}></img>
            <img src={img04} style={{ height: 300 }}></img>
        </div>
    );
};

export default Test09;

/*
src 안에 있는 이미지 파일 처리는 참조변수를 사용한다.
import 참조변수 from "이미지 경로"
*/
