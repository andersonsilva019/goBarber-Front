import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import persistReducer from './persistReducer'

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga'

const sagaMonitor = process.env.NODE_ENV === 'development'
  ? console.tron.createSagaMonitor()
  : null;
const sagaMidlleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMidlleware]; 

const store = createStore(persistReducer(rootReducer), middlewares);
const persistor = persistStore(store)

sagaMidlleware.run(rootSaga);

export { store, persistor };