import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>Hello from left</div>
      <div>
        <p>Hello from right</p>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
