// AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'; 
import EditUser from '../Pages/EditUser';
import EditPatient from '../Pages/EditPatient';
import PatientInformation from '../Pages/PatientInformation';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='edit-user' element={<EditUser/>}/>
        <Route path='edit-patient' element={<EditPatient/>}/>
        <Route path='patient-information' element={<PatientInformation/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
