// AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'; 
import Procedure from '../Pages/Procedure';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='procedure' element={<Procedure/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
