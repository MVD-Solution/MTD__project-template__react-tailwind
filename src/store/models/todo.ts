import { TodoTypes } from '@custom-types/todo';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAllTodos, updateTodo } from '@services/todos';
import { createModuleAction } from '@utils/reduxTools';
import { createReducer } from '@reduxjs/toolkit';

const initialState: TodoTypes[] = [];

const fetchTodoAction = createModuleAction<TodoTypes[], TodoTypes[], TodoTypes[]>(
  'Todo',
  'fetchTodo'
);
const updateTodoAction = createModuleAction<TodoTypes, TodoTypes, TodoTypes>('Todo', 'updateTodo');

export const todoReducers = createReducer(initialState, (builder) => {
  builder.addCase(fetchTodoAction.success, (state, action) => {
    return action.payload;
  });
  builder.addCase(fetchTodoAction.error, (state) => {
    // eslint-disable-next-line unused-imports/no-unused-vars
    return state;
  });
  builder.addCase(updateTodoAction.success, (state, action) => {
    const newTodos = state.map((item) => {
      if (action.payload && action.payload.id === item.id) {
        return action.payload;
      }
      return item;
    });
    return newTodos;
  });
  builder.addCase(updateTodoAction.error, (state) => {
    // eslint-disable-next-line unused-imports/no-unused-vars
    return state;
  });
});

const fetchToDoSagaHandler = function* () {
  try {
    const data: TodoTypes[] = yield call(fetchAllTodos);
    yield put(fetchTodoAction.success(data));
  } catch (error) {
    yield put(fetchTodoAction.error());
  }
};

const updateTodoSagaHandler = function* ({ type, payload }: { type: string; payload: TodoTypes }) {
  try {
    const data: TodoTypes = yield call(() => updateTodo(payload));
    yield put(updateTodoAction.success(data));
  } catch {
    yield put(updateTodoAction.error());
  }
};

export const watcherSaga = function* () {
  yield takeLatest(fetchTodoAction.request.type, fetchToDoSagaHandler);
  yield takeLatest(updateTodoAction.request.type, updateTodoSagaHandler);
};

export const useStates = () => {
  const todos = useAppSelector((state) => state.todos);
  return { todos };
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  const fetchTodos = () => dispatch(fetchTodoAction.request());
  const updateTodo = (data: TodoTypes) => dispatch(updateTodoAction.request(data));

  return { fetchTodos, updateTodo };
};
