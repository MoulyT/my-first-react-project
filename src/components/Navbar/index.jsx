import Button from "../Button";
import "./styles.scss";
import { ReactComponent as LogoImage } from "../../assets/landing/images/logo.svg";
// import { useState, useEffect } from "react";

function Navbar() {
  // const [visible, setVisible] = useState(true);
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const handleNavbar = debounce(() => {
  //   const currentScrollPos = window.scrollY;
  //   setVisible(
  //     (prevScrollPos > currentScrollPos &&
  //       prevScrollPos - currentScrollPos > 70) ||
  //       currentScrollPos < 10
  //   );

  //   setPrevScrollPos(currentScrollPos);
  // });

  // useEffect(() => {
  //   window.addEventListener("scroll", handleNavbar);
  //   console.log(visible);
  //   return () => window.removeEventListener("scroll", handleNavbar);
  // }, [prevScrollPos, visible, handleNavbar]);
  return (
    <div className="wrapper">
      <div
        className={"navbar"}
        //  style={{ top: visible ? "0" : "-100px" }}
      >
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

// function debounce(func, wait, immediate) {
//   var timeout;
//   return function () {
//     var context = this,
//       args = arguments;
//     var later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }
