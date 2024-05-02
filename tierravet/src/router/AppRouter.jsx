// AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'; 
import Vaccination from '../Pages/Vaccination';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='vaccination' element={<Vaccination/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
