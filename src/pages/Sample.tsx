import Checkbox from '@components/Checkbox/Checkbox';
import { useActions as useTodoActions, useStates as useTodoStates } from '@store/models/todo';
import { useEffect } from 'react';

const Sample = () => {
  const { todos } = useTodoStates();
  const { fetchTodos, switchTodoState } = useTodoActions();
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-200">
        To-do list
      </h1>
      <p className="mb-6 ml-2 text-lg font-normal text-gray-500 lg:text-xl">
        You can follow our set up in this page.
      </p>

      <div className="flex gap-2 flex-col md:w-1/2 w-full">
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg font-bold text-xl text-center">
          Your day list
        </div>

        {todos.map((todo, index) => {
          return (
            <div
              key={todo.id}
              className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg flex gap-2 items-center"
            >
              <Checkbox
                checked={todo.completed}
                variant="success"
                id={todo.id}
                onChange={() => {
                  switchTodoState(index);
                }}
              />
              <label htmlFor={todo.id}>{todo.title}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sample;
