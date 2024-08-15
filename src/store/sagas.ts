import {Operator, OperatorAddon, TableRow} from '../types';
import {fetchDataFulfilled} from './slices/dataSlice.ts';
import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

const API_KEY = '66a7f07b53c13f22a3d17fb1';

function* fetchDataSaga() {
  const operators: Operator[] = yield call(() =>
    axios.get(`https://${API_KEY}.mockapi.io/api/operator`).then(response => response.data)
  );

  const operatorsAddon: OperatorAddon[] = yield call(() =>
    axios.get(`https://${API_KEY}.mockapi.io/api/operatorAddon`).then(response => response.data)
  );

  const result: TableRow[] = yield operators.map((operator: Operator) => ({
    ...operator,
    text: operatorsAddon.find((addon: OperatorAddon) => addon.id === operator.id)?.text,
  }));

  yield put(fetchDataFulfilled(result));
}

export function* watchFetchData() {
  yield takeEvery('data/fetchDataPending', fetchDataSaga);
}
