import { Link } from "react-router-dom";

import logo from "../../display/media/images/icons/logo.png";

import ModeToggle from "./ModeToggle";

import { Link1 } from "../utils/links";

import "./style.scss";

const Header = ({ darkmode, onClick }) => {
  return (
    <header className="header">
      <div className="header-title-container">
        <Link className="header-title-link" to="/">
          <img className="header-title-logo" src={logo} alt="" />
          <h1 className="header-title">Dougie Hawes</h1>
        </Link>
      </div>
      <nav className="header-navbar">
        <Link1 to="/work" text="Work" />
        <Link1 to="/skills" text="Skills" />
        <Link1 to="/contact" text="Contact" />
      </nav>
      <ModeToggle darkmode={darkmode} onClick={onClick} />
    </header>
  );
};

export default Header;
