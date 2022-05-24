// React Methods
import { useState } from 'react';

// Firebase Methods
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmalAndPassword } from '../../utils/firebase/firebase.utils';

// Components
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

// Styles
import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  // handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmalAndPassword(email, password)

      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('Incorrect password!')
          break;
        case 'auth/user-not-found':
          alert('No user found with that email or password combination!')
          break;
        default:
          console.log(err.code);
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="sign-in-form-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit} className="">
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

        <div className='buttons-container'>
          <Button type="submit" buttonType="">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">Google Sign In</Button>
        </div>
      </form>
    </div >);
}

export default SignInForm; 