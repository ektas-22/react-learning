import logo from "../../assets/download.png";
import "../../styles/traveljournal.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <img src={logo} className="header-logo" alt="nav-logo" />
        <span className="header-title">my travel journal</span>
      </nav>
    </header>
  );
}

export default Header;
