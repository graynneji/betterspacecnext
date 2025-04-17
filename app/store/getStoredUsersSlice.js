"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const getStoredUsersSlice = createSlice({
  name: "getStoredUsers",
  initialState,
  reducers: {
    getStoredUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const { getStoredUsers } = getStoredUsersSlice.actions;

export default getStoredUsersSlice.reducer;
