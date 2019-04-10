import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION ? window._REDUX_DEVTOOLS_EXTENSION({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer, enhancer);

sagaMiddleware.run(todoSagas);

export default store;