import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.scss";
import Slide from "../Slide";
import { reviews } from "../../assets/landing/reviews-users";

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { origin: "center", perView: 3, spacing: 30 },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <Slide
        name={reviews.name[0]}
        avatar={reviews.avatar[0]}
        review={reviews.text[0]}
      ></Slide>
      <div className="keen-slider__slide number-slide1">1</div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
  );
};

export default Slider;
