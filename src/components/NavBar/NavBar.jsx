import "./navBar.css";
import logo from "../../assets/Logotipo_para_vivero_ilustrado_verde__2_-removebg-preview.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="logo-container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo-plantavita" width="150" />
        </Link>
      </div>
      <div className="center-links">
        <Link to="/category/interior" className="btn btn-outline-success">
          Interior
        </Link>
        <Link to="/category/exterior" className="btn btn-outline-success">
          Exterior
        </Link>
      </div>
      <CartWidget />
    </nav>
  );
};
