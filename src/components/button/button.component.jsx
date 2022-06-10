import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};


const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  if (buttonType === BUTTON_TYPE_CLASSES.google)
    return GoogleSignInButton;
  else if (buttonType === BUTTON_TYPE_CLASSES.inverted)
    return InvertedButton;
  else
    return BaseButton;
}

// THIS DID NOT WORK SO REPLACED FUNCTION WITH MY OWN
// ({
//   [BUTTON_TYPE_CLASSES.base]: BaseButton,
//   [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
//   [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
// }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (<CustomButton {...otherProps}>{children}</CustomButton>);
};

export default Button;