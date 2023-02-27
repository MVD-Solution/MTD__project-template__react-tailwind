import React from 'react';
import { useIntl } from 'react-intl';
import { ReactComponent as ArrowDown } from './../../assets/resource/arrow/down-arrow.svg';
const Button = ({
  showAnswer,
  setShowAnswer
}: {
  showAnswer: boolean;
  setShowAnswer: (callback: (prevState: boolean) => boolean) => void;
}) => {
  const intl = useIntl();
  const [arrow, setArrow] = React.useState<boolean>(true);

  return (
    <button
      onClick={() => {
        setShowAnswer((prevState) => !prevState);
        setArrow((prevState) => !prevState);
      }}
      className="hover:bg-gray-500 hover:text-white py-2 px-5 border border-gray-300 rounded text-gray-500 font-bold flex justify-center items-center gap-x-2 group"
    >
      <span>
        {showAnswer
          ? intl.formatMessage({
              id: 'question_button_hide_answer',
              defaultMessage: 'Error'
            })
          : intl.formatMessage({
              id: 'question_button_show_answer',
              defaultMessage: 'Error'
            })}
      </span>
      {arrow ? (
        <ArrowDown className="rotate-180 w-4 fill-gray-500 group-hover:fill-white font-bold group-hover:text-white" />
      ) : (
        <ArrowDown className="w-4 fill-gray-500 group-hover:fill-white font-bold group-hover:text-white " />
      )}
    </button>
  );
};

export default Button;
