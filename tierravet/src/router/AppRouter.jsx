import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
// import Statistics from "../Pages/Statistics";
import Telehealth from "../Pages/Telehealth";
import Users from "../Pages/UsersList";
import Vaccination from "../Pages/Vaccination";
import Layout from "../components/Layout";
import { auth } from "../firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { loginSuccess } from "../redux/auth/authSlice";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
// import Cargando from "../components/Cargando";



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

  // if (isLoading) return <Cargando/>

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<PrivateRoutes />}>
          <Route path="clinic-history" element={<ClinicHistory />} />
          <Route path="edit-patient" element={<EditPatient />} />
          <Route path="edit-user" element={<EditUser />} />
          <Route path="patient-information" element={<PatientInformation />} />
          <Route path="patients-list" element={<Patients />} />
          <Route path="prescription" element={<Prescription />} />
          <Route path="procedure" element={<Procedure />} />
          <Route path="Referrals" element={<Referrals />} />
          {/* <Route path="Statistics" element={<Statistics />} /> */}
          <Route path="telehealth" element={<Telehealth />} />
          <Route path="users-list" element={<Users />} />
          <Route path="vaccination" element={<Vaccination />} />
        </Route>
      </Route>
      <Route element={<PublicRoutes />}>
          <Route index element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
    </Routes>
  );
};

export default AppRouter;
