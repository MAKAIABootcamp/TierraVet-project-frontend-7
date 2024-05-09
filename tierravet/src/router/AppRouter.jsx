import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'; 
import AboutUs from '../Pages/AboutUs'
import Login from '../Pages/Login';
import EditUser from '../Pages/EditUser';
import EditPatient from '../Pages/EditPatient';
import PatientInformation from '../Pages/PatientInformation';
import Users from '../Pages/UsersList';
import Vaccination from '../Pages/Vaccination';
import Patients from '../Pages/PatientsList';
// import Layout from '../components/Layout';
import Telehealth from '../Pages/Telehealth';
// import Statistics from '../Pages/Statistics';
import ClinicHistory from '../Pages/ClinicHistory';
// import PublicRoutes from './PublicRoutes';
// import PrivateRoutes from './PrivateRoutes';
import Register from '../Pages/Register'
import {auth} from '../firebase/firebaseConfig'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged} from 'firebase/auth';
import { loginSuccess } from '../redux/auth/authSlice';
import Cargando from '../components/Cargando';


const AppRouter = () => {
  const {user, isLoading } = useSelector((store) => store.auth);
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

  if(isLoading) return <Cargando/>

  return (
    <Router>
      <Routes>
        {/* <Route element={<PrivateRoutes/>}> */}
          <Route path='edit-user' element={<EditUser/>}/>
          <Route path='edit-patient' element={<EditPatient/>}/>
          <Route path='clinic-history' element={<ClinicHistory/>}/>
          <Route path='patient-information' element={<PatientInformation/>}/>
          <Route path='users-list' element={<Users/>} />
          <Route path='vaccination' element={<Vaccination/>}/>
          <Route path='patients-list' element={<Patients/>}/>
          <Route path='telehealth' element={<Telehealth/>}/>
        {/* </Route> */}
        {/* <Route element={<PublicRoutes/>}> */}
          <Route path="/" element={<Home/>}/>
          <Route path="aboutUs" element={<AboutUs/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        {/* </Route> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;