"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inCall: false,
  channel: null,
  type: "video",
  caller: null,
};

const callSlice = createSlice({
  name: "call",
  initialState,
  reducers: {
    call(state, action) {
      console.log("CALL DISPATCHED", action.payload);
      state.inCall = action.payload.inCall;
      state.channel = action.payload.channel;
      state.type = action.payload.type;
      state.caller = action.payload.caller;
    },
  },
});

export const { call } = callSlice.actions;
export default callSlice.reducer;
