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
import Layout from '../components/Layout';
import Telehealth from '../Pages/Telehealth';
import Statistics from '../Pages/Statistics';
import ClinicHistory from '../Pages/ClinicHistory';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<Home/>}/>
        <Route path="AboutUs" element={<AboutUs/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path='edit-user' element={<EditUser/>}/>
        <Route path='edit-patient' element={<EditPatient/>}/>
        <Route path='clinic-history' element={<ClinicHistory/>}/>
        <Route path='patient-information' element={<PatientInformation/>}/>
        <Route path='users-list' element={<Users/>} />
        <Route path='vaccination' element={<Vaccination/>}/>
        <Route path='patients-list' element={<Patients/>}/>
        <Route path='telehealth' element={<Telehealth/>}/>
        <Route path='statistics' element={<Statistics/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
