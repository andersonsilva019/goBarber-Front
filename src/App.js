import React from 'react';
import { ToastContainer} from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Router} from 'react-router-dom'
import './config/ReactotronConfig';

import Routes from './routes'
import history from './services/history'

/* Precisa estar depois de import './config/ReactotronConfig'; */
import { store, persistor } from './store'

import GlobalStyle from './styles/global'


function App() {
  return (
    <Provider store={store}>
      {/* Só vai renderizar as rotas depois que as informações do localStorage seja buscadas */}
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes/>
          <GlobalStyle/>
          <ToastContainer autoClose={3000}/>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
