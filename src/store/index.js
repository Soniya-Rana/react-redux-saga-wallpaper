import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from '../reducer';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	{},
	compose(
		applyMiddleware(sagaMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__(),
	),
);

sagaMiddleware.run(rootSaga);

store.dispatch({ type: 'Login' });
store.dispatch({ type: 'Login' });
store.dispatch({ type: 'Login' });
store.dispatch({ type: 'Logout' });

export default store;
