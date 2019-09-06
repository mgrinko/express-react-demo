import React from 'react';

import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

import * as todoApi from './api';


class App extends React.Component {
  state = {
    todos: [],
  };

  async componentDidMount() {
    const todos = await todoApi.getTodos();

    this.setState({ todos });
  }

  addTodo = (title) => {
    this.setState(state => {
      const newTodo = {
        id: state.todos.length,
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
