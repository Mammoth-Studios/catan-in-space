import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { featureComponentOneSlice } from "../domains/example-feature/components/feature-component-one/feature-component-one.slice";
import { userQuerySlice } from "../domains/example-feature/components/feature-component-one/feature-component-one.queries";
import { loginSlice } from "../domains/login-signup/components/login/login.slice";
import { signupSlice } from "../domains/login-signup/components/signup/signup.slice";
// ...
const rootReducer = combineReducers({
  // ...local reducers and useQuery reducershere,
  // posts: postsReducer,
  // comments: commentsReducer,
  [featureComponentOneSlice.reducerPath]: featureComponentOneSlice.reducer,
  [userQuerySlice.reducerPath]: userQuerySlice.reducer,
  [loginSlice.reducerPath]: loginSlice.reducer,
  [signupSlice.reducerPath]: signupSlice.reducer,
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
