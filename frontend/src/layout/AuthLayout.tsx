
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>
      <Outlet /> {/* Render nested routes here */}
    </div>
  );
};

export default AuthLayout;
