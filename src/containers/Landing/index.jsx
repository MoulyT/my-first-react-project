import Button from "../../components/Button";
import { ReactComponent as ImageIntro } from "../../assets/landing/images/illustration-intro.svg";
import { reviews } from "../../data/reviews-users";
import "./styles.scss";
import Slider from "../../components/Slider";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

const Landing = () => {
  return (
    <>
      {/* Section introduction
    =============================================================== */}
      <section className="introduction wrapper">
        <div className="introduction__text">
          <h1>Bring everyone together to build better products.</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day while
            keeping the larger team goals in view.
          </p>
          <Button>Get started</Button>
        </div>

        <ImageIntro className="introduction__img" />
      </section>
      {/* Section Advantages
    =============================================================== */}
      <section className="advantages wrapper">
        <div className="advantages__text">
          <h2>What&apos;s different about Manage?</h2>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="advantages__cards">
          <div className="advantages__card">
            <div className="card_advantages">
              <div className="card_advantages__number">01</div>
              <div className="card_advantages__text">
                <h3 className="card_advantages__tittle">
                  Track company-wide progress
                </h3>
                <p>
                  See how your day-to-day tasks fit into wider vision. Go from
                  tracking progress at the milestone level all the way done to
                  the smallest details. Never lose sight of the bigger picture
                  again
                </p>
              </div>
            </div>
            <div className="card_advantages">
              <div className="card_advantages__number">02</div>
              <div className="card-advantages__text">
                <h3 className="card_advantages__tittle">
                  Advanced built-in reports
                </h3>
                <p>
                  Set internal delivery estimates and track progress toward
                  company goals. Our customizable dashboard helps you build out
                  reports you need to keep key skateholders informed.
                </p>
              </div>
            </div>
            <div className="card_advantages">
              <div className="card_advantages__number">03</div>
              <div className="card-advantages__text">
                <h3 className="card_advantages__tittle">
                  Everything you need in one place
                </h3>
                <p>
                  stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Opinions
      =============================================================== */}
      <section className="opinions wrapper">
        <h2>What they&apos;ve said</h2>
        <Slider reviews={reviews} />
        {console.log(reviews)}
        <Button>Get Started</Button>
      </section>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
};

export default Landing;
