import React from 'react';

import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const todosFromServer = [
  { id: 1, completed: true, title: 'HTML' },
  { id: 2, completed: true, title: 'CSS' },
  { id: 3, completed: false, title: 'JS' },
];

class App extends React.Component {
  state = {
    todos: todosFromServer,
  };

  addTodo = (title) => {
    this.setState(state => {
      const newTodo = {
        id: state.todos.length + 1,
        title: title,
        completed: false,
      };

      return {
        todos: [...state.todos, newTodo],
      };
    });
  };
  toggleTodo = (todoId) => {
    this.setState(state => {
      const todos = state.todos.map(todo => {
        if (todo.id !== todoId) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });

      return { todos };
    })
  };
  removeTodo = (todoId) => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    return (
      <>
        <h1>Todo App</h1>
        <AddTodoForm
          addTodo={this.addTodo}
        />

        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          removeTodo={this.removeTodo}
        />
      </>
    );
  }
}

export default App;
