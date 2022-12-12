import React from "react";
import { Link } from "react-router-dom";
import data from "./data";

const ProductList = () => {
    return (
        <div className="products">
            <h2>카카오 프렌즈샵</h2>
            <div>
                {data.map((item) => (
                    <article key={item.id}>
                        <Link to={`/productList/${item.id}`}>
                            <h3>{item.name}</h3>
                            <p>
                                <img src={item.photo} alt={item.name}></img>
                            </p>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
