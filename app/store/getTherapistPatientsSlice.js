// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isLoading: false,
//   therapistPatients: [],
//   error: "",
// };

// const getTherapistPatientsSlice = createSlice({
//   name: "getTherapistPatients",
//   reducers: {
//     getTherapistPatients(action, state) {
//       state.isLoading = true;
//       state.therapistPatients = action.payload;
//     },
//     setLoading(state, action) {
//       state.isLoading = action.payload;
//     },
//     setError(state, action) {
//       state.error = action.payload;
//     },
//   },
// });

// export const { getTherapistPatients } = getTherapistPatientsSlice.actions;
// export default getTherapistPatientsSlice.reducer;
"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  therapistPatients: [],
};

const getTherapistPatientsSlice = createSlice({
  name: "getTherapistPatients",
  initialState,
  reducers: {
    getTherapistPatients(state, action) {
      state.therapistPatients = action.payload;
    },
  },
});

export const { getTherapistPatients } = getTherapistPatientsSlice.actions;

export default getTherapistPatientsSlice.reducer;
