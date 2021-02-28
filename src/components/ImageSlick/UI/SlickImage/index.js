import styles from "./index.module.scss"
export default function SlickImage({ imgSrc, ...rest }) {
  return (
    <div style={{ backgroundImage: `url(${imgSrc})` }} className={styles.image}>
      <div {...rest}>
        {/* <img src={imgSrc} /> */}
      </div>
    </div>
  )
}
