import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Router from './Router';
import ConnectedIntlProvider from './ConnectedIntl';
import { LANG_KEY } from './constants/locale';

function App() {
  return (
    <Provider store={store}>
      <ConnectedIntlProvider locale={LANG_KEY.EN}>
        <Router />
      </ConnectedIntlProvider>
    </Provider>
  );
}

export default App;
