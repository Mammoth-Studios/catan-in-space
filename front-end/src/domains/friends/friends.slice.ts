import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Friend } from "./components/friends-list/friends-list.constant";

// Define a type for the slice state

export interface FriendsDomainSlice {
  searchInput: string;
  addFriendsArray: Friend[];
}

export interface FriendsDomainReducer {
  state: FriendsDomainSlice;
  action: { payload: string };
}
export interface FriendsDomainSelector {
  state: FriendsDomainSlice;
}

const initialState: FriendsDomainSlice = {
  searchInput: "",
  addFriendsArray: [],
};

export const friendsDomainSlice = createSlice({
  name: "friendsDomain",
  initialState,
  reducers: {
    updateSearchInput: (
      state: FriendsDomainSlice,
      { payload }: PayloadAction<string>
    ) => {
      state.searchInput = payload;
    },
  },
  selectors: {
    getSearchInput: ({ searchInput }: FriendsDomainSlice): string => {
      return searchInput;
    },
  },
});

interface FriendsDomainActions {
  actions: typeof friendsDomainSlice.actions;
  selectors: typeof friendsDomainSlice.selectors;
}

export const {
  actions: { updateSearchInput },
  selectors: { getSearchInput },
}: FriendsDomainActions = friendsDomainSlice;
