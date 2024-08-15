"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isQuestion: false,
};

const faqQuestionSlice = createSlice({
  name: "faqQuestion",
  initialState,
  reducers: {
    toggleQuestion(state) {
      state.isQuestion = !state.isQuestion;
    },
  },
});

export const { toggleQuestion } = faqQuestionSlice.actions;

export default faqQuestionSlice.reducer;
