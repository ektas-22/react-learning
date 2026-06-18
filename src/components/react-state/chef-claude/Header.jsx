import chef from "../../../assets/chef.png";
import "../../../styles/chefclaude.css";

function Header() {
  return (
    <header className="header">
      <img src={chef} alt="Chef Icon" />
      <h1>Chef Claude</h1>
    </header>
  );
}

export default Header;
