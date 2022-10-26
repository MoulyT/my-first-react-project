import "./styles.scss";

const Slide = ({ name, avatar, review }) => {
  return (
    <div className="review_card">
      <img
        src={avatar}
        alt={`Profile of ${name}`}
        className="review_card__img"
      />
      <h3>{name}</h3>
      <p>{review}</p>
    </div>
  );
};

export default Slide;
