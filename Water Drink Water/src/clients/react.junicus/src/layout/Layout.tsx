import Sidebar from "components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <main className="grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
