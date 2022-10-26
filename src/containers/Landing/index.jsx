import Button from "../../components/Button";
import { ReactComponent as ImageIntro } from "../../assets/landing/images/illustration-intro.svg";
import "./styles.scss";

const Landing = () => {
  return (
    <>
      <section className="introduction wrapper">
        <div className="introduction__text">
          <h1>Bring everyone together to build better products.</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day while
            keeping larger team goals in view.
          </p>
          <Button>Get started</Button>
        </div>

        <ImageIntro className="introduction__img" />
      </section>
      <section>
        <div>
          <h2>Whats different about Manage?</h2>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
      </section>
    </>
  );
};

export default Landing;
