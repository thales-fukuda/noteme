import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import GlobalStyle from './GlobalStyle';

import ActiveNoteWrapper from './components/ActiveNote';
import NoteListWrapper from './components/NoteList';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NoteListWrapper />
      <ActiveNoteWrapper />
      <GlobalStyle />
    </PersistGate>
  </Provider>
);

export default App;
