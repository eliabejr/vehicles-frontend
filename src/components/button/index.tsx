import React, { MouseEventHandler } from 'react'

import ButtonWrapper from './button-styles'

interface ButtonProps {
  alignSelf?: string
  centerInMobile?: boolean
  raised?: boolean
  color?: string
  fullWidth?: boolean
  semiWidth?: boolean
  theme?: string
  type?: any
  display?: string
  SemiHeight?: boolean
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  style?: React.CSSProperties
  children: any
}

const Button: React.FC<ButtonProps> = ({
  alignSelf,
  centerInMobile,
  raised,
  color,
  fullWidth,
  semiWidth,
  theme,
  display,
  children,
  disabled,
  type,
  onClick,
  style,
}) => (
  <ButtonWrapper
    type={type}
    alignSelf={alignSelf}
    theme={theme}
    raised={raised}
    color={color}
    fullWidth={fullWidth}
    semiWidth={semiWidth}
    centerInMobile={centerInMobile}
    disabled={disabled}
    onClick={onClick}
    display={display}
    style={style}
  >
    {children}
  </ButtonWrapper>
)

export default Button
