import { createReducer, createAction, Action } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Question } from './../../types/Question';
import {
  createModuleAction,
  createSagaHandler,
} from '././../../utils/reduxTools';

import { fetchQuestions } from '../../services/questions';

///
const moduleName = 'question';
export const fetchQuestionsAction = createModuleAction<Question[]>(
  moduleName,
  'fetchQuestion',
);
///init state

const initialState: { questions: Question[] } = {
  questions: [],
};

// ///reducer
export const questionReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchQuestionsAction.success, (state, action) => {
    state.questions = action.payload;
  });
});

//// saga handler
const fetchQuestionsSaga = createSagaHandler(function* () {
  try {
    const questionList: Question[] = yield call(fetchQuestions);
    yield put(fetchQuestionsAction.success(questionList));
  } catch (error) {
    console.log(error);
  }
});

/// watcher saga
interface InitialState {
  questions: Question[];
}

interface QuestionAction extends Action, InitialState {
  type: string;
}
// export const watcherSaga = function* () {
//   yield takeLatest<QuestionAction>(
//     fetchQuestionsAction.request().type,
//     fetchQuestionsSaga,
//   );
// };

// console.log('hi', fetchQuestionsAction.request());
