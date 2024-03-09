import { createSlice } from "@reduxjs/toolkit";
import { Friend } from "./components/friends-list/friends-list.constant";

// Define a type for the slice state

export interface FriendsDomainSlice {
  searchInput: string;
  addFriendsArray: Friend[];
}

const initialState: FriendsDomainSlice = {
  searchInput: "",
  addFriendsArray: [],
};

export const friendsDomainSlice = createSlice({
  name: "friendsDomain",
  initialState,
  reducers: {
    //@ts-ignore
    updateSearchInput: (state, action) => {
      state.searchInput = action.payload;

      console.log(state.searchInput);
    },
  },
  selectors: {
    //@ts-ignore
    getSearchInput: (state) => {
      console.log(state.searchInput);
      return state.searchInput;
    },
  },
});

export const {
  actions: { updateSearchInput },
  selectors: { getSearchInput },
} = friendsDomainSlice;
