import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import storeConfig from './store/index'
import { PersistGate } from 'redux-persist/integration/react'

require('./fontAwesome')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeConfig.store}>
      <PersistGate loading={null} persistor={storeConfig.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);