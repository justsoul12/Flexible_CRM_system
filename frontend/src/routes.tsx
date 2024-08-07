
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './components/Home/Home';
import Sign_in from './auth/sign-in';
import Dashboard from './components/Home/Dashboard';
import { useAuth } from '@clerk/clerk-react';

const AppRoutes = () => {
  const navigate = useNavigate()
  const {isSignedIn} = useAuth()
  if(isSignedIn){
    navigate('/dashboard')
  }
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<Sign_in/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  );
};

export default AppRoutes;
