import { Provider } from 'react-redux';
import { store } from '@store/index';
import Router from '@root/Router';
import ConnectedIntlProvider from '@root/ConnectedIntl';

function App() {
  return (
    <Provider store={store}>
      <ConnectedIntlProvider>
        <Router />
      </ConnectedIntlProvider>
    </Provider>
  );
}

export default App;
