import React from 'react'
import Slider from 'react-slick';
import component from '../utils/component';
import styles from './CheeseSlick.module.scss'

function CheeseSlick({ Items }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
  return (
    <div className={styles.CheeseSlick}>
      <Slider {...settings}>
        {Items.map((item) => {
          const CustomComps = component[item.component]
          return <CustomComps {...item} />
        })}
        {/* <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div> */}
      </Slider>
    </div>
  )
}

export default CheeseSlick;
