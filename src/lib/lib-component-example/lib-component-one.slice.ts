// example of a reducer slice

import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state

export interface FeatureTwoComponentOneState {
  count: number;
}

// Define the initial state using that type

const initialState: FeatureTwoComponentOneState = {
  count: 0,
};

export const featureTwoComponentOneSlice = createSlice({
  name: "featureTwoComponentOne",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.count += 1;
    },
  },
  selectors: {
    getCount: (state) => state.count,
  },
});
