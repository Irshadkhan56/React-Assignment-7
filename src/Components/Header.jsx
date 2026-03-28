import "../styles/header.css";
import react from "../assets/react.svg";

const Header = () => {
  return (
    <div className="header">
      <h2>Dashboard</h2>

      <div className="user">
        <img src={react} alt="user" />
        <span>Admin</span>
      </div>
    </div>
  );
};

export default Header;