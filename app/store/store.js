"use client";
import { configureStore } from "@reduxjs/toolkit";
import menuModalReducer from "./menuModalSlice";
import faqQuestionReducer from "./faqSlice";
import getEmailReducer from "./getEmailSlice";

const store = configureStore({
  reducer: {
    menuModal: menuModalReducer,
    faqQuestion: faqQuestionReducer,
    getEmail: getEmailReducer,
  },
});

export default store;
