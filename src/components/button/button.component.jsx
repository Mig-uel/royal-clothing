import {
  BaseButton,
  ButtonSpinner,
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

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (<CustomButton disabled={isLoading} {...otherProps}>{isLoading ? <ButtonSpinner /> : children}</CustomButton>);
};

export default Button;