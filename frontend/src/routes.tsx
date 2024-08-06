
import { Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import SignIn from './auth/sign-in';
import Home from './components/Home/Home';




const AppRoutes = () => {
  return (
    <>
      <Routes >
        <Route path='/' element={<AuthLayout/>} >
          <Route path="sign-in" element={<SignIn />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Routes>
          <Route path='/' element={<Home/>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
