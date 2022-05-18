import { takeEvery, put, call, take } from 'redux-saga/effects';

function* workerSaga() {
	yield put({ type: 'hello workerSaga' });
	console.log(put({ type: 'action workerSaga' }));
	console.log('workerSaga');
}

function* bbyeDeveloepr() {
	yield put({ type: 'hello bbyeDeveloepr' });
	console.log(put({ type: 'action bbyeDeveloepr' }));
	console.log('bbyeDeveloepr');
}

function* rootSaga() {
	yield takeEvery('Login', workerSaga);
	// yield take('Login');
	// yield call(workerSaga);
	// yield take('Add to Cart');
	// yield take('BUy ');

	console.log('Soniya');
	yield take('Logout');
	yield call(bbyeDeveloepr);
}

//watcher saga -> action ->worker saga

export default rootSaga;
