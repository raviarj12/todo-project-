import React, { useState } from "react";
import TodaForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  //function to add a new to-do
  const addTodo = (todo) => {
    setTodos([...todos, todo]);

  };

  //function to remove a to-do
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));

  };

  return(
    <div className="App">
      <h1>To-Do List</h1>
      <TodaForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    
    </div>
  );
}

export default App;