
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './components/Home/Home';
import Sign_in from './auth/sign-in';
import Dashboard from './components/Home/Dashboard';
import { useAuth } from '@clerk/clerk-react';
import Sign_up from './auth/sign-up';
import PageNotFound from './components/shared/PageNotFound';

const AppRoutes = () => {
  const {userId:clerkId} = useAuth()
  const navigate = useNavigate()
  const {isSignedIn} = useAuth()
  if(isSignedIn){
    navigate(`/dashboard/${JSON.parse(JSON.stringify(clerkId))}`)
  }
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<Sign_in/>}/>
      <Route path='/sign-up' element={<Sign_up/>} />
      <Route path={`/dashboard/${JSON.parse(JSON.stringify(clerkId))}`} element={<Dashboard user={JSON.stringify(clerkId)}/>}/>
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  );
};

export default AppRoutes;
