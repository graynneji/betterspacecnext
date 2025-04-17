"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    sideBarToggle(state) {
      state.sidebar = !state.sidebar;
    },
  },
});

export const { sideBarToggle } = sideBarSlice.actions;

export default sideBarSlice.reducer;
