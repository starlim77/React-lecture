import React from "react";
import "./css/style05.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main from "./page05/Main";
import ProductList from "./page05/ProductList";
import ProductDetail from "./page05/ProductDetail";

const App05 = () => {
    return (
        <BrowserRouter>
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/productList">ProductList</Link>
                        </li>
                    </ul>
                </nav>
                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path="/" element={<Main></Main>}></Route>
                    <Route path="/productList">
                        <Route
                            index
                            element={<ProductList></ProductList>}
                        ></Route>
                        <Route
                            path=":productId"
                            element={<ProductDetail></ProductDetail>}
                        ></Route>
                    </Route>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App05;
