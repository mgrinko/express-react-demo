const API_URL = 'http://localhost:5000/api/todos';

export const getTodos = async () => {
  const response = await fetch(API_URL);

  return response.json();
};

export const addTodo = async (title)  => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ title }),
  });

  return response.json();
};
