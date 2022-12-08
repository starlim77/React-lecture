import React, { useRef, useState } from "react";
import styles from "../css/TodoForm.module.css";

const TodoForm = ({ onAdd }) => {
    const [text, setText] = useState("");

    const onInput = (e) => {
        const { value } = e.target;
        setText(value);
    };
    const textRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault(); //submit되지 않도록 막아준다. jQuery > return false 와 같은 기능;

        if (!text) return;
        onAdd(text);
        setText("");

        textRef.current.focus();
    };

    return (
        <form className={styles.TodoForm}>
            <input
                type="text"
                value={text}
                onChange={onInput}
                ref={textRef}
                placeholder="해야 할 일을 입력하시오"
            ></input>
            <button type="submit" onClick={onSubmit}>
                추가
            </button>
        </form>
    );
};

export default TodoForm;
