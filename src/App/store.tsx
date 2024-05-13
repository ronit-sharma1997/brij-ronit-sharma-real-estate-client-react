import { configureStore } from '@reduxjs/toolkit';
import propertySearchReducer from '../common/slices/PropertySearchSlice.tsx';
import collectionSearchReducer from '../pages/Home/slices/CollectionSearchSlice.tsx';

export const store = configureStore({
  reducer: {
    propertySearch: propertySearchReducer,
    collectionSearch: collectionSearchReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
