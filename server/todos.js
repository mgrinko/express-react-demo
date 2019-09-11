'use strict';

let todos = [
  { id: 1, completed: true, title: 'HTML' },
  { id: 2, completed: true, title: 'CSS' },
  { id: 3, completed: false, title: 'JS' },
  { id: 4, completed: false, title: 'React' },
];

const getTodos = () => {
  return todos;
};

const addTodo = (title) => {
  const newTodo = {
    id: todos.length + 1,
    title: title,
    completed: false,
  };

  todos = [...todos, newTodo];
};

module.exports = {
  getTodos,
  addTodo
};
