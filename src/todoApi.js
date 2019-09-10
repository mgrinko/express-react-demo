const API_URL = process.env.REACT_APP_API_URL;
const TODOS_URL = `${API_URL}/todos`;

export const getTodos = async () => {
  const response = await fetch(TODOS_URL);

  return response.json();
};
