import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Router from './Router';
import ConnectedIntlProvider from './ConnectedIntl';

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
