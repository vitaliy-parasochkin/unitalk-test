import createSagaMiddleware from '@redux-saga/core';
import dataReducer from './slices/dataSlice.ts';
import {configureStore} from '@reduxjs/toolkit';
import {watchFetchData} from './sagas.ts';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: gDM => gDM({serializableCheck: false}).concat(sagaMiddleware),
});
sagaMiddleware.run(watchFetchData);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
