import React from 'react';

import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

import { getTodos, addTodo } from './todoApi';

class App extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.refreshTodos();
  }

  async refreshTodos() {
    const todos = await getTodos();

    this.setState({ todos });
  }

  addTodo = async (title) => {
    await addTodo(title);
    this.refreshTodos();
  };

  removeTodo = (todoId) => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== todoId),
    }));
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
