import "./Header.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link
            to="/"
            style={{ color: "#ffffff", textDecoration: "none" }}
            className="logo-link"
          >
            Gopinath Maddula
          </Link>
        </div>

        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/case-studies">Case Studies</NavLink>

          <NavLink to="/resume">Resume</NavLink>
        </nav>
      </div>
    </header>
  );
}
