import "./styles.scss";
const Slide = ({ name, avatar, review }) => {
  return (
    <div
      className="review_card keen-slider__slide"
      style={{ maxWidth: 600, minWidth: 600 }}
    >
      <img
        src={avatar}
        alt={`Profile of ${name}`}
        className="review_card__img"
      />
      <div className="review_card__text">
        <h3>{name}</h3>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Slide;
