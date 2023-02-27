import React from 'react';
import { ReactComponent as ArrowDownFull } from './../../assets/resource/arrow/arrow-down-full.svg';
import { useIntl } from 'react-intl';

const SortBy = () => {
  const [arrow, setArrow] = React.useState<boolean>(true);
  const intl = useIntl();
  return (
    <div className="inline-block ">
      <div className="border border-gray-300 rounded">
        <div className="flex flex-col ">
          <p className=" bg-blue-400 text-white px-5 py-2 text-center">
            {intl.formatMessage({
              id: 'sort_by_label',
              defaultMessage: 'Error'
            })}
          </p>
          <button
            className="flex justify-center items-center gap-x-3 hover:bg-gray-500  py-2 px-5 group hover:text-white text-gray-500"
            onClick={() => {
              setArrow((prevState) => !prevState);
            }}
          >
            <span className=" text-gray-500 group-hover:text-white ">
              {intl.formatMessage({
                id: 'sort_by_expertise',
                defaultMessage: 'Error'
              })}
            </span>
            {arrow ? <ArrowDownFull className="rotate-180  " /> : <ArrowDownFull />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortBy;
