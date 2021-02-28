import React from 'react';
import style from "./ImageSlick.module.scss";
import Slider from "react-slick";
import component from "../utils/component"


function ImageSlick({ list }) {
  //  const { index, ...props } = props;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className={style.ImageSlick}>
      <Slider {...settings}>
        {list.map((item) => {
          const CustomComps = component[item.component]
          return <CustomComps {...item} />
        })}
      </Slider>
    </div>
  )
}

export default ImageSlick;
