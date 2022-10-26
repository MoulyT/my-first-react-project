import "./styles.scss";

const Slide = ({ name, avatar, review }) => {
  return (
    <div>
      <img src={avatar} alt={`Profile of ${name}`} />
      <h3>{name}</h3>
      <p>{review}</p>
    </div>
  );
};

export default Slide;
