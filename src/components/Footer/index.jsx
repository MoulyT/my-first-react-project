import "./styles.scss";
import { ReactComponent as LogoImage } from "../../assets/landing/images/logo-white.svg";
import { ReactComponent as LogoFB } from "../../assets/landing/images/icon-facebook.svg";
import { ReactComponent as LogoYT } from "../../assets/landing/images/icon-youtube.svg";
import { ReactComponent as LogoTwitter } from "../../assets/landing/images/icon-twitter.svg";
import { ReactComponent as LogoPinterest } from "../../assets/landing/images/icon-pinterest.svg";
import { ReactComponent as LogoInsta } from "../../assets/landing/images/icon-instagram.svg";
import Button from "../Button/index";

export default function Footer() {
  return (
    <div className="footer wrapper_exterior">
      <div className="footer__logo">
        <LogoImage />
      </div>
      <ul className="footer__list--1">
        <li>
          <a href="https://github.com">Home</a>
        </li>
        <li>
          <a href="https://github.com">Pricing</a>
        </li>
        <li>
          <a href="https://github.com">Product</a>
        </li>
        <li>
          <a href="https://github.com">About Us</a>
        </li>
      </ul>
      <ul className="footer__list--2">
        <li>
          <a href="https://github.com">Careers</a>
        </li>
        <li>
          <a href="https://github.com">Community</a>
        </li>
        <li>
          <a href="https://github.com">Privacy Policy</a>
        </li>
      </ul>

      <div className="footer__input_container">
        <input type="text" className="footer__input" />
        <Button>Go</Button>
      </div>

      <div className="footer__logos">
        <LogoFB />
        <LogoYT />
        <LogoTwitter />
        <LogoPinterest />
        <LogoInsta />
      </div>
      <div className="footer__copyright">
        Copyright 2020. All Rights Reserved
      </div>
    </div>
  );
}
