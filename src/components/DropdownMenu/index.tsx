import React from 'react';
import { ReactComponent as ArrowDown } from './../../assets/resource/arrow/down-arrow.svg';
import { TOPIC, listTopics, topicTable } from '../../constants/topic';
import { useIntl } from 'react-intl';

const DropdownMenu = () => {
  const [topic, setTopic] = React.useState<string>(TOPIC.ALL);
  const intl = useIntl();
  return (
    <div className="inline-block ">
      <div className="border border-gray-300 rounded mb-1">
        <div className="flex flex-col ">
          <p className=" bg-blue-400 text-white px-5 py-2 ">
            {intl.formatMessage({
              id: 'drop_down_menu_label',
              defaultMessage: 'Error',
            })}
          </p>
          <button className="flex justify-center items-center gap-x-3 hover:bg-gray-500  py-2 px-5 group relative after:content-[''] after:absolute after:w-28 after:bg-red-500 after:h-10 after:top-5 after:left-0 after:bg-transparent">
            <span className=" text-gray-500 group-hover:text-white ">
              {topicTable[topic]}
            </span>
            <ArrowDown className="w-4 fill-gray-500 group-hover:fill-white" />

            <div className="absolute hidden group-hover:block w-48 top-12 left-0 border border-gray-300 bg-white rounded">
              <ul>
                {listTopics.map((topic) => (
                  <li
                    className="py-1.5 pl-2 flex gap-2  hover:bg-gray-500 hover:text-white"
                    onClick={() => {
                      setTopic(topic.id);
                    }}
                    key={topic.id}
                  >
                    {<topic.icon className="mr-2" />}
                    <span className=" ">{topic.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
