const API_URL = 'http://localhost:5000/api/todos';

export const getTodos = async () => {
  const response = await fetch(API_URL);

  return response.json();
};
