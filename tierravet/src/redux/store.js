import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import patientsReducer from './patients/patientSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        patients: patientsReducer
    },
    devTools: import.meta.env.NODE_ENV !== "production",
});

export default store;
