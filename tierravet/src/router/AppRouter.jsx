// AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'; 
import Procedure from '../Pages/Procedure';
import Prescription from '../Pages/Prescription';
import Referrals from '../Pages/Referrals';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='procedure' element={<Procedure/>}/>
        <Route path='prescription' element={<Prescription/>}/>
        <Route path='referrals' element={<Referrals/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
