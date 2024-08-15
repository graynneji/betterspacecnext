"use client";
import { configureStore } from "@reduxjs/toolkit";
import menuModalReducer from "./menuModalSlice";
import faqQuestionReducer from "./faqSlice";

const store = configureStore({
  reducer: {
    menuModal: menuModalReducer,
    faqQuestion: faqQuestionReducer,
  },
});

export default store;
