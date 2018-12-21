import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import ListOfNotes from './containers/ListOfNotes';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ListOfNotes />
    </PersistGate>
  </Provider>
);

export default App;
