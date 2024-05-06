// AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'; 
import AboutUs from '../Pages/AboutUs'
import Login from '../Pages/Login';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="AboutUs" element={<AboutUs/>} />
        <Route path="Login" element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
