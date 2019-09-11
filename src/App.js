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

  toggleTodo = async (todoId, completed) => {
    await todoApi.updateTodo(todoId, { completed });
    this.refreshTodos();
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
