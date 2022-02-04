import {takeEvery, call, put} from 'redux-saga/effects';

export function* watcherSaga() {
  yield takeEvery('GENERATE_FACT', workerSaga);
}

function* workerSaga() {
  const response = yield call(fetchData);
  const fact = response.text;

  yield put({type: 'FACT', payload: fact});
}

async function fetchData() {
  const response = await fetch(
    'https://uselessfacts.jsph.pl/random.json?language=en',
  );
  return response.json();
}
