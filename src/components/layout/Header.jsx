import { Link, NavLink } from "react-router-dom";
import CartWidget from "../cart/CartWidget";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">☕</span>
          <span className="logo-text">MÜLLER COFFEE STORE</span>
        </Link>
        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Inicio
          </NavLink>
          <NavLink to="/productos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Catálogo
          </NavLink>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};

export default Header;