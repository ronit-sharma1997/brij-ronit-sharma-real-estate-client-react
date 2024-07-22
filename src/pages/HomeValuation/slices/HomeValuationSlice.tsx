import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../App/store.tsx';

interface HomeValuationEstimate {
  name: string;
  email: string;
  phone: string;
  address: string;
  page: string;
  status: string;
  error: string | null;
  estimate: number;
}

const initialState: HomeValuationEstimate = {
  name: '',
  email: '',
  phone: '',
  address: '',
  page: '1',
  status: 'idle',
  error: '',
  estimate: 0,
};

export const getHomeValuation = createAsyncThunk('get/homeValuation', async (_, { getState }) => {
  const { homeValuation } = getState() as RootState;
  const response = await fetch(
    `https://bk080fyia4.execute-api.us-east-1.amazonaws.com/Prod/home-valuation?address=${homeValuation.address}`,
  );
  return await response.json();
});

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
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getHomeValuation.pending, (state, action) => {
        state.status = 'loading';
        state.page = '1';
      })
      .addCase(getHomeValuation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const estimateResponse = action.payload;
        state.estimate = estimateResponse['bundle'].length > 0 ? estimateResponse['bundle'][0]['zestimate'] : '0';
        state.address = estimateResponse['bundle'].length > 0 ? estimateResponse['bundle'][0]['address'] : '';
        state.page = '2';
      })
      .addCase(getHomeValuation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
        state.page = '1';
      });
  },
});

export const selectName = (state: RootState) => state.homeValuation.name;

export const selectEmail = (state: RootState) => state.homeValuation.email;

export const selectPhone = (state: RootState) => state.homeValuation.phone;

export const selectPage = (state: RootState) => state.homeValuation.page;

export const selectAddress = (state: RootState) => state.homeValuation.address;

export const selectStatus = (state: RootState) => state.homeValuation.status;

export const selectEstimate = (state: RootState) => state.homeValuation.estimate;

export const { setName, setEmail, setPhone, setPage, setAddress, setStatus } = homeValuationSlice.actions;

export default homeValuationSlice.reducer;
