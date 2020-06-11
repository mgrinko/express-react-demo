import React, { useEffect, useState } from 'react';

import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

import * as todoApi from './api';


const App = () => {
  const [todos, setTodos] = useState([]);

  const refreshTodos = async () => {
    const todos = await todoApi.getTodos();

    setTodos(todos);
  }

  useEffect(() => {
    refreshTodos();
  })

  const addTodo = async (title) => {
    const result = await todoApi.addTodo(title);

    console.log(result);

    refreshTodos();
  };

  const toggleTodo = async (todoId, completed) => {
    await todoApi.updateTodo(todoId, { completed });

    refreshTodos()
  };

  const removeTodo = async (todoId) => {
    await todoApi.removeTodo(todoId);

    refreshTodos()
  };

  return (
    <>
      <AddTodoForm
        addTodo={addTodo}
      />

      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default App;
