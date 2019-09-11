const API_URL = process.env.REACT_APP_API_URL;
const TODOS_URL = `${API_URL}/todos`;

export const getTodos = async () => {
  const response = await fetch(TODOS_URL);

  return response.json();
};

export const addTodo = async (title) => {
  const response = await fetch(TODOS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({ title }),
  });

  return response.json();
};

export const removeTodo = async (todoId) => {
  const response = await fetch(`${TODOS_URL}/${todoId}`, {
    method: 'DELETE',
  });

  return response.json();
};

export const updateTodo = async (todoId, params) => {
  const response = await fetch(`${TODOS_URL}/${todoId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(params),
  });

  return response.json();
};
