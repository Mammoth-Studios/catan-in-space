import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state

export interface loginSignupViewState {
  activeForm: string;
}

const initialState: loginSignupViewState = {
  activeForm: "login",
};

export const loginSignupViewSlice = createSlice({
  name: "activeForm",
  initialState,
  reducers: {
    setActiveForm: (state, action: PayloadAction<string>) => {
      state.activeForm = action.payload;
    },
  },
});

// Export the setActiveForm action
export const { setActiveForm } = loginSignupViewSlice.actions;

// Export the reducer
export default loginSignupViewSlice.reducer;
