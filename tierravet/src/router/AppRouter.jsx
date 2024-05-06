// AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'; 
import ClinicHistory from '../Pages/ClinicHistory';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='clinic-history' element={<ClinicHistory/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
