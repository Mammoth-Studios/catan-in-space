// example of a reducer slice

import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state

export interface SignupState {
  email: string;
  password: string;
}

const initialState: SignupState = {
  email: "",
  password: "",
};

export const signupSlice = createSlice({
  name: "authSignup",
  initialState,
  reducers: {
    updateSignupForm: (state, action) => {
      const { field, value } = action.payload;
      (state as { [key: string]: string })[field] = value;
    },
  },
  selectors: {
    getSignupForm: (state) => state,
  },
});
