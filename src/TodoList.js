import React from 'react';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  const activeTodos = todos.filter(todo => !todo.completed);

  return (
    <div>
      <p className="info">
        {`${activeTodos.length} of ${todos.length} tasks left`}
      </p>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo">
            <label title={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={event => toggleTodo(todo.id, event.target.checked)}
              />

              {todo.title}
            </label>

            <button onClick={() => removeTodo(todo.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
