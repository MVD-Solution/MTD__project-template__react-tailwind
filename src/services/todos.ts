import { TodoTypes } from '@custom-types/todo';
import axios from 'axios';

export const fetchAllTodos = async () => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return data;
  } catch (e) {
    throw new Error('Getting error when fetching data');
  }
};

export const updateTodo = async (newTodo: TodoTypes) => {
  try {
    const { data } = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${newTodo.id}`,
      newTodo
    );
    return data;
  } catch (e) {
    throw new Error('Getting error when updating data');
  }
};
