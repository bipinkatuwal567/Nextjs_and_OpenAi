import { FaBarsStaggered } from "react-icons/fa6";
import Sidebar from "../components/Sidebar";

export default function dashboardLayout({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden fixed top-6 right-6"
        >
           <FaBarsStaggered /> 
        </label>
        <div className="bg-base-200 px-8 py-12 min-h-screen">
        {children}
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
}
