import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../App/store.tsx';

interface PropertySearchState {
  searchText: string;
  searchType: string;
  searchResults: { type: string; value: string; label: string }[];
  status: string;
  error: string | null;
}

const initialState: PropertySearchState = {
  searchText: '',
  searchResults: [],
  searchType: 'For Sale',
  status: 'idle',
  error: null,
};

export const fetchSearchResults = createAsyncThunk('get/fetchSearchResults', async (_, { getState }) => {
  const { propertySearch } = getState() as RootState;
  const response = await fetch(
    `https://d0swqphyr7.execute-api.us-east-1.amazonaws.com/Prod/property-search-bar?searchText=${propertySearch.searchText}&searchType=${propertySearch.searchType}`,
  );
  return await response.json();
});

export const propertySearchSlice = createSlice({
  name: 'propertySearch',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setSearchType: (state, action: PayloadAction<string>) => {
      state.searchType = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSearchResults.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export const { setSearchText, setSearchType } = propertySearchSlice.actions;

export const selectSearchText = (state: RootState) => state.propertySearch.searchText;
export const selectSearchResults = (state: RootState) => state.propertySearch.searchResults;

export const selectSearchType = (state: RootState) => state.propertySearch.searchType;

export default propertySearchSlice.reducer;
