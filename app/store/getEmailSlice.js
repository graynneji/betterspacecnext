"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

const getEmailSlice = createSlice({
  name: "getEmail",
  initialState,
  reducers: {
    getEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const { getEmail } = getEmailSlice.actions;

export default getEmailSlice.reducer;
