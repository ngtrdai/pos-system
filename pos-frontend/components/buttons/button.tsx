import classnames from 'classnames'
import { ButtonSizeEnum, ButtonVariantEnum } from './enums'
import {
  DefaultButtonDisabledStyles,
  DefaultButtonSizeStyles,
  DefaultButtonVariantStyles,
} from './style'
import { BorderButtons } from './constants'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantEnum
  size?: ButtonSizeEnum
}

const Button = ({
  className,
  children,
  variant = ButtonVariantEnum.Primary,
  size = ButtonSizeEnum.md,
  disabled,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={classnames(
        `${DefaultButtonVariantStyles[variant]} ${DefaultButtonSizeStyles[size]} duration-200 rounded-[3px] hover:before:content-[''] before:content-none before:rounded-b-[3px] before:absolute`,
        className,
        {
          'before:-bottom-[3px]':
            size === ButtonSizeEnum.sm &&
            BorderButtons.find((item) => item === variant),
          'before:-bottom-1':
            size === ButtonSizeEnum.md &&
            BorderButtons.find((item) => item === variant),
          'before:-bottom-[5px]':
            (size === ButtonSizeEnum.lg || size === ButtonSizeEnum.xl) &&
            BorderButtons.find((item) => item === variant),
        },
        disabled ? DefaultButtonDisabledStyles[variant] : '',
        {
          'hover:before:content-none translate-y-0 hover:translate-y-0':
            disabled,
        }
      )}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button
