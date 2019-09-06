const uuidv1 = require('uuid/v1');

let todos = [
  { id: 1, completed: false, title: '111111' },
  { id: 2, completed: false, title: '222222' },
  { id: 3, completed: true, title: '3333333' },
];

const getTodos = () => {
  return todos;
};

const addTodo = (title) => {
  const newTodo = {
    id: uuidv1(),
    title: title,
    completed: false,
  };

  todos = [...todos, newTodo];
};

const toggleTodo = (todoId) => {
  todos = todos.map(todo => {
    return (todo.id !== todoId)
      ? todo
      : { ...todo, completed: !todo.completed }
  });
};

const removeTodo = (todoId) => {
  todos = todos.filter(todo => todo.id !== todoId);
};

module.exports = {
  getTodos,
  addTodo,
  toggleTodo,
  removeTodo
};
