import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import ClinicHistory from "../Pages/ClinicHistory";
import EditPatient from "../Pages/EditPatient";
import EditUser from "../Pages/EditUser";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PatientInformation from "../Pages/PatientInformation";
import Patients from "../Pages/PatientsList";
import Prescription from "../Pages/Prescription";
import Procedure from "../Pages/Procedure";
import Referrals from "../Pages/Referrals";
import Register from "../Pages/Register";
import Telehealth from "../Pages/Telehealth";
import UsersList from "../Pages/UsersList"; // Cambio aquí
import Vaccination from "../Pages/Vaccination";
import Statistics from "../Pages/Statistics";
import Layout from "../components/Layout";
import { auth } from "../firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { loginSuccess } from "../redux/auth/authSlice";
import PrivateRoutes from "./PrivateRoutes";
import Cargando from "../components/Cargando";
import PublicRoutes from "./PublicRoutes";
import Users from "../Pages/UsersList";

const AppRouter = () => {
  const { user, isLoading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && !user) {
        dispatch(
          loginSuccess({
            id: currentUser.uid,
            name: currentUser.displayName,
            accessToken: currentUser.accessToken,
            email: currentUser.email,
          })
        );
      }
    });
  }, [dispatch, user]);

  // Mostrar usuario en consola
  useEffect(() => {
    console.log("Usuario logeado:", user);
  }, [user]);

  if (isLoading) return <Cargando />;

  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="home" element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/app/patients-list" />} /> {/* Cambio aquí */}
          <Route path="users" element={<Users/>}/>
          <Route path="clinic-history" element={<ClinicHistory />} />
          <Route path="edit-patient" element={<EditPatient />} />
          <Route path="edit-user" element={<EditUser />} />
          <Route path="patient-information" element={<PatientInformation />} />
          <Route path="patients-list" element={<Patients />} />
          <Route path="prescription" element={<Prescription />} />
          <Route path="procedure" element={<Procedure />} />
          <Route path="referrals" element={<Referrals />} />
          <Route path="telehealth" element={<Telehealth />} />
          <Route path="vaccination" element={<Vaccination />} />
          <Route path="statistics" element={<Statistics/>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
