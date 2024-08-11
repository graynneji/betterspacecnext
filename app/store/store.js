"use client";
import { configureStore } from "@reduxjs/toolkit";
import menuModalReducer from "./menuModalSlice";

const store = configureStore({
  reducer: {
    menuModal: menuModalReducer,
  },
});

export default store;
