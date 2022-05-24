import { useState } from 'react';
import { createUserDocumentFromAuth, createAuthUserWithEmalAndPassword } from '../../utils/firebase/firebase.utils';

// Components
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

// Styles
import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  // handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmalAndPassword(email, password);
      console.log(user);

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use!')
      }
      else if (err.code === 'auth/weak-password') {
        alert('Cannot create user, password does not meet length requirements (>6)!');
      }
      else
        console.log('User creation failed: ' + err.message);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="">
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName} />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email} />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password} />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword} />


        <Button type="submit" buttonType="">Sign Up</Button>
      </form>
    </div >);
}

export default SignUpForm; 