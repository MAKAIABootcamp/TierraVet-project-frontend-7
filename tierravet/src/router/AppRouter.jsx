// AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'; 
import Users from '../Pages/UsersList';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='users-list' element={<Users/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
