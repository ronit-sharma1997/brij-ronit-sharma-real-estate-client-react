import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../App/store.tsx';

interface PropertySearchBarState {
  searchText: string;
  searchType: string;
  searchResults: { type: string; value: string; label: string }[];
  selectedSearchResult: { type: string; value: string; label: string } | null;
  status: string;
  error: string | null;
}

const initialState: PropertySearchBarState = {
  searchText: '',
  searchResults: [],
  searchType: 'For Sale',
  status: 'idle',
  error: null,
  selectedSearchResult: null,
};

export const fetchSearchResults = createAsyncThunk('get/fetchSearchResults', async (_, { getState }) => {
  const { propertySearchBar } = getState() as RootState;
  const response = await fetch(
    `https://d0swqphyr7.execute-api.us-east-1.amazonaws.com/Prod/property-search-bar?searchText=${propertySearchBar.searchText}&searchType=${propertySearchBar.searchType}`,
  );
  return await response.json();
});

export const propertySearchBarSlice = createSlice({
  name: 'propertySearchBar',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
      state.selectedSearchResult = null;
    },
    setSearchType: (state, action: PayloadAction<string>) => {
      state.searchType = action.payload;
    },
    setSelectedSearchResult: (state, action: PayloadAction<{ type: string; value: string; label: string }>) => {
      state.selectedSearchResult = action.payload;
      state.searchText = action.payload.label;
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

export const { setSearchText, setSearchType, setSelectedSearchResult } = propertySearchBarSlice.actions;

export const selectSearchText = (state: RootState) => state.propertySearchBar.searchText;
export const selectSearchResults = (state: RootState) => state.propertySearchBar.searchResults;

export const selectSearchType = (state: RootState) => state.propertySearchBar.searchType;

export const selectSelectedSearchResult = (state: RootState) => state.propertySearchBar.selectedSearchResult;

export default propertySearchBarSlice.reducer;
