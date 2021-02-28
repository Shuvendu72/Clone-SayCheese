import styles from "./index.module.scss"
export default function Input({ label, register, validation, errors, ...rest }) {
  console.log(errors)
  const error = errors?.[rest.name] ? true : false
  return (
    <div >
      <div className={styles.label}>{label}</div>
      <input className={`${styles.input} ${error && (styles.inputError)}`} {...rest} ref={register(validation)} />
      {error && (<div className={styles.error}>{errors[rest.name].message || "This field is required"}</div>)}
    </div>
  )
}
