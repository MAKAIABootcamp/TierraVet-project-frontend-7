import { createSlice } from "@reduxjs/toolkit";

const vaccinationSlice = createSlice({
  name: "Vaccination",
  initialState: {
    vaccination: [],
    isLoadiingVaccination: false,
    errorVaccination: null,
  },
  reducers: {
    vaccinationRequest: (state) => {
      state.isLoadiingVaccination = true;
      state.errorVaccination = null;
    },
    fillVaccination: (state, action) => {
      state.vaccination = action.payload;
      state.isLoadiingVaccination = false;
      state.errorVaccination = null;
    },
    vaccinationFail: (state, action) => {
      (state.isLoadiingVaccination = false),
        (state.errorVaccination = state.errorVaccination);
    },
    addVaccination: (state, action) => {
      state.vaccination.push(action.payload);
      state.isLoadiingVaccination = false;
    },
    deletedVaccination: (state, action) => {
      state.isLoadiingVaccination = false;
      state.vaccination = state.vaccination.filter(action.payload);
    },
  },
});

export const {
  vaccinationRequest,
  fillVaccination,
  vaccinationFail,
  addVaccination,
  deletedVaccination,
} = vaccinationSlice.actions;

export default vaccinationSlice.reducer;
