import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import Router from '@root/Router';
import ConnectedIntlProvider from '@root/ConnectedIntl';

function App() {
  return (
    <Provider store={store}>
      <ConnectedIntlProvider>
        <div className="min-h-screen dark:bg-gray-900">
          <Router />
        </div>
      </ConnectedIntlProvider>
    </Provider>
  );
}

export default App;
