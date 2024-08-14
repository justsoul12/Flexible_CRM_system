
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Sign_in from './auth/sign-in';
import { useAuth } from '@clerk/clerk-react';
import Sign_up from './auth/sign-up';
import PageNotFound from './components/shared/PageNotFound';
import  {Admin, Dashboard, Profile, Settings}  from './admin/page';



const AppRoutes = () => {
  const {userId:clerkId} = useAuth()
  const {isSignedIn} = useAuth()
  
 

  console.log(clerkId)
  return (
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
