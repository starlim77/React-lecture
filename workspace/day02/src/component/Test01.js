import React from "react";

const Test01 = () => {
    // function test1() {
    //     alert("test1");
    // }

    const test1 = () => {
        alert("test1");
    };
    const test2 = () => {
        alert("test2");
    };
    const test3 = (num) => {
        alert("num = " + num);
    };
    const test4 = (num) => {
        alert(`num = ${num}`);
    };

    return (
        <div>
            <h2>이벤트 : on+첫글자 대문자</h2>
            <p>
                <button onClick={test1}>클릭</button>
                {/* 함수 뒤에 ()를 붙이지 않는다 */}
                <button onClick={test2}>클릭</button>
                <button onClick={() => test3(10)}>클릭</button>
                <button onClick={() => test4(20)}>클릭</button>
            </p>
            <p>
                <button
                    onClick={() => {
                        console.log("사자");
                        console.log("호랑이");
                        console.log("기린");
                    }}
                >
                    클릭
                </button>
                <button onClick={() => console.log("빨강 사과")}>클릭</button>
                {/* 한줄 이므로 {}를 치지 않아도 된다 */}
            </p>
        </div>
    );
};

export default Test01;

/*
리엑트는 순수 자바스크립트가 아니다 => 베이스가 자바스크립트일 뿐이다.
함수 뒤에 ()를 붙이면 새로고침 하자마자 바로 실행된다.
=> 해결하려면 함수로 한 번 묶어준다.
=> 값을 넘길때는 함수 ex) () => 함수(값)
*/
