import { IntlProvider } from 'react-intl';
import { useStates } from '@store/models/intl';

type ConnectedIntlProviderTypes = {
  children: JSX.Element;
};

function ConnectedIntlProvider({ children }: ConnectedIntlProviderTypes) {
  const { language, translations } = useStates();

  return (
    <IntlProvider locale={language} messages={translations}>
      {children}
    </IntlProvider>
  );
}

export default ConnectedIntlProvider;
