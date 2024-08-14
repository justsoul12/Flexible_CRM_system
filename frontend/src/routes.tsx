
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './components/Home/Home';
import Sign_in from './auth/sign-in';
import { useAuth } from '@clerk/clerk-react';
import Sign_up from './auth/sign-up';
import PageNotFound from './components/shared/PageNotFound';
import  {Admin, Dashboard, Profile, Settings}  from './admin/page';
import { useEffect, useState } from 'react';
import Loader from './components/shared/Loader';



const AppRoutes = () => {
  const {userId:clerkId} = useAuth()
  const {isSignedIn} = useAuth()
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
 

  console.log(clerkId)
  return loading ? (
    <Loader/>
  ): (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<Sign_in/>}/>
      <Route path='/sign-up' element={<Sign_up/>} />
      {isSignedIn && (
        <Route path="/admin/dashboard/:clerkId/*" element={<Admin clerkId={clerkId} />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="" element={<Dashboard clerkId={clerkId} />} /> {/* Default to Dashboard */}
        </Route>
      )}
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  );
};

export default AppRoutes;
