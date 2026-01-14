import { useState, useRef } from 'react'

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false)

  const email = useRef()
  const password = useRef()

  function handleSubmit(event) {
    // Stops the default behaviour of the browser of creating and sending an HTTP request automatically.
    event.preventDefault()

    const user = {
      email: email.current.value,
      password: password.current.value
    }

    const emailIsValid = user.email.includes('@')

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      // Return to stop any HTTP requests after the validation went wrong.
      return;
    }

    setEmailIsInvalid(false)

    console.log('Data sent.')

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email}/>
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
