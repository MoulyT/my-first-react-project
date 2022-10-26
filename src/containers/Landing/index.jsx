import Button from "../../components/Button";

const Landing = () => {
  return (
    <>
      <section className="introduction wrapper">
        <div className="introcution__text">
          <h1>Bring everyone together to build better products.</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day while
            keeping larger team goals in view.
          </p>
          <Button>Get started</Button>
        </div>
      </section>
    </>
  );
};

export default Landing;
