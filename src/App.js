import React from 'react';

import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

import * as todoApi from './todoApi';

class App extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.refreshTodos();
  }

  async refreshTodos() {
    const todos = await todoApi.getTodos();

    this.setState({ todos });
  }

  addTodo = async (title) => {
    await todoApi.addTodo(title);
    this.refreshTodos();
  };

  removeTodo = async (todoId) => {
    await todoApi.removeTodo(todoId);
    this.refreshTodos();
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
