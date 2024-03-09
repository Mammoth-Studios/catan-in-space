// example of a reducer slice

import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state

export interface LoginState {
  email: string;
  password: string;
}

// Define the initial state using that type

const initialState: LoginState = {
  email: "",
  password: "",
};

export const loginSlice = createSlice({
  name: "authLogin",
  initialState,
  reducers: {
    updateLoginForm: (state, action) => {
      const { field, value } = action.payload;
      (state as { [key: string]: string })[field] = value;
    },
  },
  selectors: {
    getLoginForm: (state) => state,
  },
});
