import "../Styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">MyDashboard</h2>

      <ul className="nav-links">
        <li><i className="fa-solid fa-house"></i> Dashboard</li>
        <li><i className="fa-solid fa-folder"></i> Projects</li>
        <li><i className="fa-solid fa-chart-line"></i> Analytics</li>
        <li><i className="fa-solid fa-gear"></i> Settings</li>
        <li><i className="fa-solid fa-user"></i> Profile</li>
      </ul>
    </div>
  );
};

export default Sidebar;