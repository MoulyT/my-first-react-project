import Button from "../Button";
import "./styles.scss";
import { ReactComponent as LogoImage } from "../../assets/landing/images/logo.svg";

function Navbar() {
  return (
    <div>
      <LogoImage />
      <div>
        <ul>
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
            <a href="https://github.com">Community</a>
          </li>
        </ul>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Navbar;
