import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import GlobalStyle from './GlobalStyle';

import NoteList from './components/NoteList';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NoteList />
      <GlobalStyle />
    </PersistGate>
  </Provider>
);

export default App;
