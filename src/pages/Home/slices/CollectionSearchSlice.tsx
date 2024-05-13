import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../App/store.tsx';

interface CollectionState {
  collectionResults: Collection[];
  status: string;
  error: string | null;
}

export interface Collection {
  loading: boolean;
  minBeds: number;
  maxBeds: number;
  minBaths: number;
  maxBaths: number;
  minSqFt: number;
  maxSqFt: number;
  minPrice: number;
  maxPrice: number;
  photoUrls: string[];
  city: string;
  propertyCount: number;
}

const initialState: CollectionState = {
  collectionResults: [
    {
      city: 'Iselin',
      loading: true,
      minBeds: 0,
      maxBeds: 0,
      minBaths: 0,
      maxBaths: 0,
      minSqFt: 0,
      maxSqFt: 0,
      minPrice: 0,
      maxPrice: 0,
      photoUrls: [],
      propertyCount: 0,
    },
    {
      city: 'Woodbridge Proper',
      loading: true,
      minBeds: 0,
      maxBeds: 0,
      minBaths: 0,
      maxBaths: 0,
      minSqFt: 0,
      maxSqFt: 0,
      minPrice: 0,
      maxPrice: 0,
      photoUrls: [],
      propertyCount: 0,
    },
    {
      city: 'Metuchen',
      loading: true,
      minBeds: 0,
      maxBeds: 0,
      minBaths: 0,
      maxBaths: 0,
      minSqFt: 0,
      maxSqFt: 0,
      minPrice: 0,
      maxPrice: 0,
      photoUrls: [],
      propertyCount: 0,
    },
    {
      city: 'Piscataway',
      loading: true,
      minBeds: 0,
      maxBeds: 0,
      minBaths: 0,
      maxBaths: 0,
      minSqFt: 0,
      maxSqFt: 0,
      minPrice: 0,
      maxPrice: 0,
      photoUrls: [],
      propertyCount: 0,
    },
  ],
  status: 'idle',
  error: null,
};

export const fetchCollectionResults = createAsyncThunk('get/fetchUniqueCollections', async (_) => {
  const response = await fetch(
    'https://cav2wq4mzg.execute-api.us-east-1.amazonaws.com/Prod/collections?cities=Iselin,Woodbridge Proper,Edison,Metuchen',
  );
  return await response.json();
});

export const collectionSearchSlice = createSlice({
  name: 'collectionSearch',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCollectionResults.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCollectionResults.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.collectionResults = action.payload;
      })
      .addCase(fetchCollectionResults.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export const selectCollectionResults = (state: RootState) => state.collectionSearch.collectionResults;

export default collectionSearchSlice.reducer;
