import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.scss";
import Slide from "../Slide";

const Slider = (reviews) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { origin: "center", perView: 3, spacing: 30 },
  });

  const cardReviews = reviews.map((r) => (
    <Slide name={r.name} avatar={r.avatar} review={r.text} key={r.id}></Slide>
  ));

  return (
    <div ref={sliderRef} className="keen-slider">
      {cardReviews}
    </div>
  );
};

export default Slider;

{
  /* <div className="keen-slider__slide number-slide1">1</div>
<div className="keen-slider__slide number-slide2">2</div>
<div className="keen-slider__slide number-slide3">3</div>
<div className="keen-slider__slide number-slide4">4</div>
<div className="keen-slider__slide number-slide5">5</div>
<div className="keen-slider__slide number-slide6">6</div> */
}
