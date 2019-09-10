import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title) {
      return;
    }

    addTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
