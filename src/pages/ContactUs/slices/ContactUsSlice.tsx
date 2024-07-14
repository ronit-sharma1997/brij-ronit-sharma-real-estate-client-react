import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../App/store.tsx';

interface ContactUs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: ContactUs = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export const contactUsSlice = createSlice({
  name: 'contactUs',
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
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const selectName = (state: RootState) => state.contactUs.name;

export const selectEmail = (state: RootState) => state.contactUs.email;

export const selectPhone = (state: RootState) => state.contactUs.phone;

export const selectMessage = (state: RootState) => state.contactUs.message;

export const { setName, setEmail, setPhone, setMessage } = contactUsSlice.actions;

export default contactUsSlice.reducer;
