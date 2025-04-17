"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientRecieverId: {},
};

const getPatientRecvIdSlice = createSlice({
  name: "getPatientRecvId",
  initialState,
  reducers: {
    getPatientRecvId(state, action) {
      state.patientRecieverId = action.payload;
    },
  },
});

export const { getPatientRecvId } = getPatientRecvIdSlice.actions;

export default getPatientRecvIdSlice.reducer;
