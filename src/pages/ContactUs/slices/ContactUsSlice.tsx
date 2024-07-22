import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../App/store.tsx';

interface ContactUs {
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  error: string | null;
}

const initialState: ContactUs = {
  name: '',
  email: '',
  phone: '',
  message: '',
  status: 'idle',
  error: null,
};

export const sendMessage = createAsyncThunk('post/contactUs', async (_, { getState }) => {
  const { contactUs } = getState() as RootState;
  const response = await fetch(`https://lkwscjg84e.execute-api.us-east-1.amazonaws.com/Prod/contact-us`, {
    method: 'POST',
    body: JSON.stringify({
      name: contactUs.name,
      email: contactUs.email,
      message: contactUs.message,
    }),
  });
  return await response.json();
});

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
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(sendMessage.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export const selectName = (state: RootState) => state.contactUs.name;

export const selectEmail = (state: RootState) => state.contactUs.email;

export const selectPhone = (state: RootState) => state.contactUs.phone;

export const selectMessage = (state: RootState) => state.contactUs.message;

export const selectStatus = (state: RootState) => state.contactUs.status;

export const { setName, setEmail, setPhone, setMessage, setStatus } = contactUsSlice.actions;

export default contactUsSlice.reducer;
