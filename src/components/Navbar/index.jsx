import Button from "../Button";
import "./styles.scss";
import { ReactComponent as LogoImage } from "../../assets/landing/images/logo.svg";

function Navbar() {
  return (
    <div className="wrapper">
      <div className="navbar">
        <LogoImage className="navbar__logo" />
        <div>
          <ul className="navbar__list">
            <li>
              <a href="https://github.com">Pricing</a>
            </li>
            <li>
              <a href="https://github.com">Product</a>
            </li>
            <li>
              <a href="https://github.com">About Us</a>
            </li>
            <li>
              <a href="https://github.com">Careers</a>
            </li>
            <li>
              <a href="/chat">Community</a>
            </li>
          </ul>
        </div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Navbar;
