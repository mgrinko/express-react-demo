const API_URL = process.env.REACT_APP_API_URL;
const TODOS_URL = `${API_URL}/todos`;

export const getTodos = async () => {
  const response = await fetch(TODOS_URL);

  return response.json();
};

export const addTodo = async (title) => {
  const response = await fetch(TODOS_URL, {
    method: 'post',
    body: title,
  });

  return response.json();
};
