import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
  name: "Patients",
  initialState: {
    patients: [],
    isLoadiingPatients: false,
    errorPatients: null,
  },
  reducers: {
    patientsRequest: (state) => {
      state.isLoadiingPatients = true;
      state.errorPatients = null;
    },
    fillPatients: (state, action) => {
      state.patients = action.payload;
      state.isLoadiingPatients = false;
      state.errorPatients = null;
    },
    patientsFail: (state, action) => {
      (state.isLoadiingPatients = false),
        (state.errorPatients = state.errorPatients);
    },
    addPatients: (state, action) => {
      state.patients.push(action.payload);
      state.isLoadiingPatients = false;
    },
    editPatients: (state, action) => {
      state.isLoadiingPatients = false;
      state.patients = state.patients.map((item) =>
        action.payload.id == item.id ? { ...item, ...action.payload } : item
      );
    },
    deletedPatient: (state, action) => {
      state.isLoadiingPatients = false;
      state.patients = state.patients.filter(action.payload);
    },
  },
});

export const {
  patientsRequest,
  fillPatients,
  patientsFail,
  addPatients,
  editPatients,
  deletedPatient,
} = patientSlice.actions;

export default patientSlice.reducer;
