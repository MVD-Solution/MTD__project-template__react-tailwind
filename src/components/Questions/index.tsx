import React from 'react';
import Question from './../Question';
const listQuestion = [
  {
    question: 'aaa',
    answer: 'bbb',
    difficulty: 'hard',
    categoryID: 'javascript'
  },
  {
    question: 'aaa',
    answer: 'bbb',
    difficulty: 'hard',
    categoryID: 'css'
  }
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
