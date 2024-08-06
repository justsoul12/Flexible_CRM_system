
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Outlet /> {/* Render nested routes here */}
    </div>
  );
};

export default MainLayout;
