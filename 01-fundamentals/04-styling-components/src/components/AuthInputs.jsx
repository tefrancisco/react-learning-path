import { useState } from 'react';
import classes from './Header.module.css'
import { styled } from 'styled-components'
import Button from './Button.jsx'
import CustomInput from './CustomInput.jsx'

// Styled components creates a component with a CSS that you can write here, like this:
// styled.p, styled.div, styled.section, will create the HTML element you write after . as a component.
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer className="controls">
          <CustomInput
            label="Login"
            type="email"
            // className={emailNotValid ? 'invalid' : undefined}
            $invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />

          <CustomInput
            label="Password"
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button className='button' onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
