import { IntlProvider } from 'react-intl';
import { useStates, useActions } from './store/model/intl';
import { useEffect } from 'react';

const ConnectedIntlProvider = ({
  children,
  locale,
}: {
  children: JSX.Element;
  locale: string;
}) => {
  const { language, translations } = useStates();
  const { saveLang } = useActions();

  useEffect(() => {
    if (locale !== language) {
      saveLang(locale);
    }
  }, []);

  return (
    <IntlProvider locale={language} messages={translations}>
      {children}
    </IntlProvider>
  );
};

export default ConnectedIntlProvider;
