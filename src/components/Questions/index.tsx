import React from 'react';
import Question from './../Question';
import question from './../../a/js_2_q.md';
import answer from './../../a/js_2_a.md';
const listQuestion = [
  {
    question: 'aaa',
    answer: 'bbb',
    difficulty: 'hard',
    categoryID: 'javascript',
  },
  {
    question: 'aaa',
    answer: 'bbb',
    difficulty: 'hard',
    categoryID: 'css',
  },
];
const Questions = () => {
  return (
    <div className="mt-6">
      {listQuestion.map((q) => (
        <Question question={q} />
      ))}
    </div>
  );
};

export default Questions;
