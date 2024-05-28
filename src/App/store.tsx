import { configureStore } from '@reduxjs/toolkit';
import propertySearchBarReducer from '../common/slices/PropertySearchBarSlice.tsx';
import collectionSearchReducer from '../pages/Home/slices/CollectionSearchSlice.tsx';
import propertySearchReducer from '../pages/PropertySearch/slices/PropertySearchSlice.tsx';

export const store = configureStore({
  reducer: {
    propertySearchBar: propertySearchBarReducer,
    collectionSearch: collectionSearchReducer,
    propertySearch: propertySearchReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
