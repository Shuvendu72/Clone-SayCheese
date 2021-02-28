import { useForm } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';
import Input from '../Input';

import styles from "./index.module.scss"

const inputFields = [
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    validation: {
      required: true,
      validate: (value) => isEmail(value) || "Please enter a valid email"
    }
  },
  {
    label: "Mobile Number",
    name: "mobile_number",
    type: "number",
    placeholder: "Enter your mobile number",
    validation: {
      // required: true,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: "Please enter a valid number"
      }
    }
  }
]
export default function Login() {
  const { register, errors, handleSubmit } = useForm()
  function onFormSubmit(data, e) {
    console.log(data)
  }
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.content}>
          <div className={styles.heading}>Begin your happiness journey now.</div>
        </div>
        <div className={styles.content}>
          <div className={styles.formwrap}>
            {inputFields.map((field) => <Input  {...field} register={register} errors={errors} />)}
          </div>
        </div>
        <div className={styles.content}>
          <button onClick={handleSubmit(onFormSubmit)}>Submit</button>
        </div>
      </div>
    </div>
  )
}
