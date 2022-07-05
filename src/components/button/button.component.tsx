import { ButtonHTMLAttributes, FC } from 'react'
import {
  BaseButton,
  ButtonSpinner,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles'

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
}

const getButton = (
  buttonType = BUTTON_TYPE_CLASSES.base
): typeof BaseButton => {
  if (buttonType === BUTTON_TYPE_CLASSES.google) return GoogleSignInButton
  else if (buttonType === BUTTON_TYPE_CLASSES.inverted) return InvertedButton
  else return BaseButton
}

export type ButtonProps = {
  children: React.ReactNode
  buttonType?: BUTTON_TYPE_CLASSES
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType)

  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  )
}

export default Button
