import { IntlProvider } from 'react-intl';
import { useStates } from './store/model/intl';

type ConnectedIntlProviderTypes = {
  children: JSX.Element;
};
const ConnectedIntlProvider = ({ children }: ConnectedIntlProviderTypes) => {
  const { language, translations } = useStates();

  return (
    <IntlProvider locale={language} messages={translations}>
      {children}
    </IntlProvider>
  );
};

export default ConnectedIntlProvider;
