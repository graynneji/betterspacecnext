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
    toggleTurnOff(state) {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, toggleTurnOff } = menuModalSlice.actions;

export default menuModalSlice.reducer;
