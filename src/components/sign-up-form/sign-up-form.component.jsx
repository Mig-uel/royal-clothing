import { useState } from 'react';
import { createUserDocumentFromAuth, createAuthUserWithEmalAndPassword } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

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
    <div className="">
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit} className="">
        <label htmlFor="">Display Name</label>
        <input type="text" required onChange={handleChange} name="displayName" value={displayName} />

        <label htmlFor="">Email</label>
        <input type="email" required onChange={handleChange} name="email" value={email} />

        <label htmlFor="">Password</label>
        <input type="password" required onChange={handleChange} name="password" value={password} />

        <label htmlFor="">Confirm Password</label>
        <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />


        <button type="submit" className="">Sign Up</button>
      </form>
    </div >);
}

export default SignUpForm; 