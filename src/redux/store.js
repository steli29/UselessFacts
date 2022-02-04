import {createStore, applyMiddleware} from 'redux';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga as saga} from './user/user.saga';

const sagaMiddleWare = createSagaMiddleware();
const middleWare = [sagaMiddleWare];
const store = createStore(rootReducer, applyMiddleware(...middleWare));

sagaMiddleWare.run(saga);

export default store;
