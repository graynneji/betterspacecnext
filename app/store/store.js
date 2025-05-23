"use client";
import { configureStore } from "@reduxjs/toolkit";
import menuModalReducer from "./menuModalSlice";
import faqQuestionReducer from "./faqSlice";
import getStoredUsersReducer from "./getStoredUsersSlice";
import getTherapistPatientsReducer from "./getTherapistPatientsSlice";
import getPatientRecvIdReducer from "./getPatientRecvIdSlice";
import sideBarReducer from "./sideBarSlice";
import callReducer from "./callSlice";
const store = configureStore({
  reducer: {
    menuModal: menuModalReducer,
    faqQuestion: faqQuestionReducer,
    getStoredUsers: getStoredUsersReducer,
    getTherapistPatients: getTherapistPatientsReducer,
    getPatientRecvId: getPatientRecvIdReducer,
    sideBar: sideBarReducer,
    call: callReducer,
  },
});

export default store;
