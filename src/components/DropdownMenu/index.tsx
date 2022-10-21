import React from 'react';
import { ReactComponent as ArrowDown } from './../../assets/resource/arrow/down-arrow.svg';
import {
  CATEGORY,
  listCategory,
  categoryTable,
} from '../../constants/category';
import { useIntl } from 'react-intl';

const DropdownMenu = () => {
  const [category, setCategory] = React.useState<string>(CATEGORY.ALL);
  const intl = useIntl();
  return (
    <div className="inline-block ">
      <div className="border border-gray-300 rounded">
        <div className="flex flex-col ">
          <p className=" bg-blue-400 text-white px-5 py-2 ">
            {intl.formatMessage({
              id: 'drop_down_menu_label',
              defaultMessage: 'Error',
            })}
          </p>
          <button className="flex justify-center items-center gap-x-3 hover:bg-gray-500  py-2 px-5 group relative after:content-[''] after:absolute after:w-28 after:bg-red-500 after:h-10 after:top-5 after:left-0 after:bg-transparent">
            <span className=" text-gray-500 group-hover:text-white ">
              {categoryTable[category]}
            </span>
            <ArrowDown className="w-4 fill-gray-500 group-hover:fill-white" />

            <div className="absolute hidden group-hover:block w-48 top-12 left-0 border border-gray-300 bg-white rounded">
              <ul>
                {listCategory.map((c) => (
                  <li
                    className="py-1.5 pl-2 flex gap-2  hover:bg-gray-500 hover:text-white"
                    onClick={() => {
                      setCategory(c.id);
                    }}
                    key={c.id}
                  >
                    {<c.icon className="mr-2" />}
                    <span className=" ">{c.text}</span>
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
