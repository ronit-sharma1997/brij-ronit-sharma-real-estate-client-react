import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../App/store.tsx';

interface HomeValuationEstimate {
  name: string;
  email: string;
  phone: string;
  address: string;
  page: string;
}

const initialState: HomeValuationEstimate = {
  name: '',
  email: '',
  phone: '',
  address: '',
  page: '1',
};

export const homeValuationSlice = createSlice({
  name: 'homeValuation',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setPage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
  },
});

export const selectName = (state: RootState) => state.homeValuation.name;

export const selectEmail = (state: RootState) => state.homeValuation.email;

export const selectPhone = (state: RootState) => state.homeValuation.phone;

export const selectPage = (state: RootState) => state.homeValuation.page;

export const selectAddress = (state: RootState) => state.homeValuation.address;

export const { setName, setEmail, setPhone, setPage, setAddress } = homeValuationSlice.actions;

export default homeValuationSlice.reducer;
