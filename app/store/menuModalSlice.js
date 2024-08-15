"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
};

const menuModalSlice = createSlice({
  name: "menuModal",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = menuModalSlice.actions;

export default menuModalSlice.reducer;
