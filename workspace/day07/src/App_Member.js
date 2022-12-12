import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./member/LoginForm";
import Main from "./member/Main";
import WriteForm from "./member/WriteForm";
import WriteList from "./member/WriteList";

const App_Member = () => {
    return (
        <BrowserRouter>
            <>
                <Main></Main>

                <Routes>
                    <Route
                        path="/writeForm"
                        element={<WriteForm></WriteForm>}
                    ></Route>
                    <Route
                        path="/loginForm"
                        element={<LoginForm></LoginForm>}
                    ></Route>
                    <Route
                        path="/writeList"
                        element={<WriteList></WriteList>}
                    ></Route>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App_Member;
