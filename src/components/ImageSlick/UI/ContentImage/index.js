import React from 'react'
import CustomButton from '../../../utils/CustomButton/CustomButton'
import SlickImage from '../SlickImage'
import styles from "./index.module.scss"
// import ImageSlick from '../../ImageSlick'

export default function ContentImage({ heading, subHeading, button, ...rest }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerElement}>
        <h2>{heading}</h2>
        <p>{subHeading}</p>
        <button>
          <span>{button}</span>
        </button>
        {/* <CustomButton>{button}</CustomButton> */}
      </div>
      <SlickImage {...rest} />
    </div>
  )
}
