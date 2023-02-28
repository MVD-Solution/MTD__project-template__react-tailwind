import React from 'react';
import { useAppSelector } from '@hooks/useRedux';

export const useTranslations = (keys: Array<string>) => {
  const dictionary: any = useAppSelector((state) => state.intl.translations);
  const result: Array<string> = [];
  if (keys && Array.isArray(keys)) {
    let content = '';
    keys.forEach((key) => {
      if (typeof key === 'string') {
        content = key in dictionary ? dictionary[key] : `${key}`;
      } else {
        const { id, args } = key;
        content = id in dictionary ? dictionary[id] : `${id}`;
        content = content
          .split(/{\s*([a-zA-Z0-9_]+)\s*}/)
          .map((item, index) => {
            if (index % 2 === 0) {
              return item;
            } else {
              return item in args ? args[item] : `{${item}}`;
            }
          })
          .join('');
      }
      result.push(content);
    });
  }
  return result;
};

export const useTranslation = (key: string, args: any) => {
  const dictionary: any = useAppSelector((state) => state.intl.translations);
  if (dictionary[key]) {
    const result = dictionary[key]
      .split(/{\s*([a-zA-Z0-9_]+)\s*}/)
      .map((item: any, index: any) => {
        if (index % 2 === 0) {
          return item;
        } else {
          return item in args ? args[item] : `{${item}}`;
        }
      })
      .join('');
    return result;
  } else {
    return '';
  }
};

export const FormattedMessage = React.memo(({ id, args }: { id: string; args: any }) => {
  const content = useTranslation(id, args);
  return <>{content}</>;
});
