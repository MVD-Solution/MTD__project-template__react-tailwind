import { TodoTypes } from '@custom-types/todo';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAllTodos } from '@services/todos';
import { createModuleAction } from '@utils/reduxTools';
import { createReducer } from '@reduxjs/toolkit';

const initialState: TodoTypes[] = [
  {
    id: '',
    userId: '',
    title: '',
    completed: false
  }
];

const fetchTodoAction = createModuleAction<TodoTypes[]>('Todo', 'fetchTodo');

// export const TodoSlice = createSlice({
//   name: 'todos',
//   initialState: initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       state.push(action.payload);
//     }
//     fetchToDoAction.request
//   }
// });

export const todoReducers = createReducer(initialState, (builder) => {
  builder.addCase(fetchTodoAction.success, (state, action) => {
    return action.payload;
  });
  builder.addCase(fetchTodoAction.error, (state) => {
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

export const watcherSaga = function* () {
  yield takeLatest(fetchTodoAction.request.type, fetchToDoSagaHandler);
};

export const useStates = () => {
  const todos = useAppSelector((state) => state.todos);
  return { todos };
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  const fetchTodos = () => dispatch(fetchTodoAction.request());
  return { fetchTodos };
};
