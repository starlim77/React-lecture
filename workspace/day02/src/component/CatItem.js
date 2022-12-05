import React from "react";

const CatItem = ({ item }) => {
    const { id, img, title } = item;

    return (
        <li key={id}>
            <a href="#">
                <div>
                    <img src={img}></img>
                    <h3>{title}</h3>
                </div>
            </a>
        </li>
    );
};

export default CatItem;
