"use client";
import { configureStore } from "@reduxjs/toolkit";
import menuModalReducer from "./menuModalSlice";
import faqQuestionReducer from "./faqSlice";
import getUsersReducer from "./getUsersSlice";

const store = configureStore({
  reducer: {
    menuModal: menuModalReducer,
    faqQuestion: faqQuestionReducer,
    getUsers: getUsersReducer,
  },
});

export default store;
