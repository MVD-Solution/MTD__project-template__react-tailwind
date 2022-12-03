import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Markdown from 'markdown-to-jsx';

import Button from './Button';
import { Question } from '../../types/Question';
import { categoryColor } from '../../constants/category';

//highligh code and backend stuff

const Component = ({ question, ...rest }: { question: Question }) => {
  const [showAnswer, setShowAnswer] = React.useState<boolean>(false);

  return (
    <div className={`bg-white rounded-2xl py-10 px-10 relative mb-10`}>
      <Markdown
        options={{
          overrides: {
            SyntaxHighlighter: {
              component: SyntaxHighlighter,
              props: { style: docco },
            },
          },
        }}
      >
        {question.question}
      </Markdown>
      <Button showAnswer={showAnswer} setShowAnswer={setShowAnswer} />
      {showAnswer && (
        <Markdown
          options={{
            overrides: {
              SyntaxHighlighter: {
                component: SyntaxHighlighter,
                props: { style: docco },
              },
            },
          }}
        >
          {question.answer}
        </Markdown>
      )}
      <span className="absolute top-0 -translate-x-2/4 left-1/2 border-[1px] px-3 rounded-2xl -translate-y-2/4 bg-white">
        {question.difficulty}
      </span>
      <span
        className={`absolute top-0 right-0 w-0 h-0 border-t-[100px] border-t-solid ${
          categoryColor[question.categoryID]
        } border-l-[100px] border-l-solid border-l-transparent`}
      />
    </div>
  );
};

export default Component;
