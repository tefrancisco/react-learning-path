import { useState } from 'react'
import Input from './Input.jsx'
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js'

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('')
  // const [enteredPassword, setEnteredPassword] = useState('')
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  })

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  })

  const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email)
  const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6)

  function handleInputChange(identifier, event) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      // Javascript feature that allows you to dinamically target and send a property of a object.
      [identifier]: event.target.value
    }))

    // Whenever the user starts typing again, the error disappears.
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }))
  }

  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }))
  }


  function handleSubmit(event) {
    // Stops the default behaviour of the browser of creating and sending an HTTP request automatically.
    event.preventDefault()
    console.log(enteredValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur('email')}
          onChange={() => handleInputChange('email', event)}
          value={enteredValues.email}
          error={emailIsInvalid && 'Please enter a valid email!'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur('password')}
          onChange={() => handleInputChange('password', event)}
          value={enteredValues.password}
          error={passwordIsInvalid && 'Please enter a valid password!'}
        />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
