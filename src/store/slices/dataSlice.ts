import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IOperatorState, Operator} from '../../types';

const dataInitState: IOperatorState = {
  data: [],
  isLoading: false,
  errors: '',
};

export const dataSlice = createSlice({
  name: 'data',
  initialState: dataInitState,
  reducers: {
    fetchDataPending: state => {
      state.isLoading = true;
    },
    fetchDataFulfilled: (state, action: PayloadAction<Operator[]>) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchDataRejected: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const {fetchDataPending, fetchDataFulfilled, fetchDataRejected} = dataSlice.actions;

export default dataSlice.reducer;
