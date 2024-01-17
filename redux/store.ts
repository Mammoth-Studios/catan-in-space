import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { featureComponentOneSlice } from "../src/domains/example-feature/components/feature-component-one/feature-component-one.slice";
import { userQuerySlice } from "../src/domains/example-feature/components/feature-component-one/feature-component-one.queries";
// ...
const rootReducer = combineReducers({
  // ...local reducers and useQuery reducershere,
  // posts: postsReducer,
  // comments: commentsReducer,
  [featureComponentOneSlice.reducerPath]: featureComponentOneSlice.reducer,
  [userQuerySlice.reducerPath]: userQuerySlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userQuerySlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
