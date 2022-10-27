import Button from "../Button";
import "./styles.scss";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__text">
        <h2>Simplify how your team works today.</h2>
      </div>
      <div className="banner__button_container">
        <Button color="secondary">Get Started</Button>
      </div>
    </div>
  );
}

export default Banner;
