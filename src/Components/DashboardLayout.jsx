import Sidebar from "./Sidebar";
import Header from "./Header";
import "../styles/layout.css";

const DashboardLayout = ({children}) => {
  return (
    <div className="layout">

      <Sidebar/>

      <div className="main">

        <Header/>

        <div className="content">
          {children}
        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;