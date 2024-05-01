import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'; 
import Patients from '../Pages/PatientsList';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='patients-list' element={<Patients/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
