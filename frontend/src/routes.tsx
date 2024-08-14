
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './components/Home/Home';
import Sign_in from './auth/sign-in';
import { useAuth } from '@clerk/clerk-react';
import Sign_up from './auth/sign-up';
import PageNotFound from './components/shared/PageNotFound';
import { Admin } from './admin/page';

const AppRoutes = () => {
  const {userId:clerkId} = useAuth()
  const navigate = useNavigate()
  const {isSignedIn} = useAuth()
  
  if(isSignedIn){
    navigate(`/admin/dashboard/${JSON.stringify(clerkId)}/*`, {replace:true})
  }
 
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<Sign_in/>}/>
      <Route path='/sign-up' element={<Sign_up/>} />
      <Route path={`/admin/dashboard/${JSON.stringify(clerkId)}/*`} element={<Admin clerkId={JSON.stringify(clerkId)}/>}/>
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  );
};

export default AppRoutes;
