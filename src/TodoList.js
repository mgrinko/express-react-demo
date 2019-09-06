import React from 'react';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  const activeTodos = todos.filter(todo => !todo.completed);

  return (
    <div>
      <h2>{`${activeTodos.length} of ${todos.length} tasks left`}</h2>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label title={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />

              {todo.title}

              <button onClick={() => removeTodo(todo.id)}>x</button>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
