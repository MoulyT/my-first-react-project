import Button from "../Button";
import "./styles.scss";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__text">Simplify how your team works today.</div>
      <Button color="secondary">Get Started</Button>
    </div>
  );
}

export default Banner;
