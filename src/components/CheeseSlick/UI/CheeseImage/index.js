import React from 'react';
import styles from "./index.module.scss"

function CheeseImage({ imgSrc, ...rest }) {
  return (
    // <div style={{ backgroundImage: `url(${imgSrc})` }} className={styles.image}>
    <div className={styles.image} {...rest}>
      <img src={imgSrc} />
    </div>
    // </div>
  )
}

export default CheeseImage;
