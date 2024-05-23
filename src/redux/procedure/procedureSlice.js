import { createSlice } from "@reduxjs/toolkit";

const procedureSlice = createSlice({
  name: "Procedure",
  initialState: {
    procedure: [],
    isLoadiingProcedure: false,
    errorProcedure: null,
  },
  reducers: {
    procedureRequest: (state) => {
      state.isLoadiingProcedure = true;
      state.errorProcedure = null;
    },
    fillProcedure: (state, action) => {
      state.procedure = action.payload;
      state.isLoadiingProcedure = false;
      state.errorProcedure = null;
    },
    procedureFail: (state, action) => {
      (state.isLoadiingProcedure = false),
        (state.errorProcedure = state.errorProcedure);
    },
    addProcedure: (state, action) => {
      state.procedure.push(action.payload);
      state.isLoadiingProcedure = false;
    },
    deletedProcedure: (state, action) => {
      state.isLoadiingProcedure = false;
      state.procedure = state.procedure.filter(action.payload);
    },
  },
});

export const {
  procedureRequest,
  fillProcedure,
  procedureFail,
  addProcedure,
  deletedProcedure,
} = procedureSlice.actions;

export default procedureSlice.reducer;
