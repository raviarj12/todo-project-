import React, { useState } from "react";

function TodoForm({ addTodo }) {
    const [todoText, setTodoText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoText.trim()) {
            addTodo({
                id: Date.now(),
                text: todoText,

            });
            setTodoText(""); //cler input field

            
        }
    };
    return (
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter a new to-do"
        />
        <button type="submit">Add Todo</button>
        </form>
     );
}

export default TodoForm;