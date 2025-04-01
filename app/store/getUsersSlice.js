"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const getUsersSlice = createSlice({
  name: "getUsers",
  initialState,
  reducers: {
    getUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const { getUsers } = getUsersSlice.actions;

export default getUsersSlice.reducer;
