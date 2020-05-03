import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga'

const sagaMonitor = process.env.NODE_ENV === 'development'
  ? console.tron.createSagaMonitor()
  : null;
const sagaMidlleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMidlleware]; 

const store = createStore(rootReducer, middlewares);

sagaMidlleware.run(rootSaga);

export default store;