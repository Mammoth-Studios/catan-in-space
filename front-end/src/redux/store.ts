import { configureStore } from "@reduxjs/toolkit";
import { featureComponentOneSlice } from "../domains/example-feature/components/feature-component-one/feature-component-one.slice";
import { userQuerySlice } from "../domains/example-feature/components/feature-component-one/feature-component-one.queries";
import { friendsDomainSlice } from "@domains/friends/friends.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [featureComponentOneSlice.reducerPath]: featureComponentOneSlice.reducer,
    [userQuerySlice.reducerPath]: userQuerySlice.reducer,
    [friendsDomainSlice.reducerPath]: friendsDomainSlice.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(userQuerySlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
