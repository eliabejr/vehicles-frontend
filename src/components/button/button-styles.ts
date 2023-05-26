import styled from 'styled-components'
import { colors, border, font, sizes } from '@/utils/theme'

interface ButtonWrapperProps {
  alignSelf?: string
  centerInMobile?: boolean
  raised?: boolean
  fullWidth?: boolean
  semiWidth?: boolean
  theme: string
  color?: string
  height?: boolean
  display?: string
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  align-items: center;
  align-self: ${(props) => props.alignSelf || 'inherit'};
  background-color: ${(props) => (props.raised ? 'transparent' : props.theme)};
  border: 2px solid;
  border-color: ${(props) => (props.raised ? props.theme : 'transparent')};
  border-radius: 10px;
  box-shadow: 0px 0px 10px #3030301f;
  color: ${(props) => (props.raised ? props.theme : (props.color || colors.darkful))};
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  display: ${(props) => props.display || 'block'};
  font-family: ${font.family.default};
  font-size: ${sizes.s4}!important;
  font-weight: ${(props) => (props.raised ? '700' : 'normal')};
  justify-content: center;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  outline: none;
  padding: 10px 25px;
  semiwidth: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  touch-action: manipulation;
  text-align: center;
  text-decoration: none !important;
  transition: all 0.17s ease-in-out;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  
  a {
    color: inherit;
    font-size: 18px;
    text-decoration: none;
  }
  @media (max-width: 960px) {
    align-self: ${(props) =>
    props.centerInMobile ? 'center' : props.alignSelf};
  }

  input[type='file'] {
    display: none;
  }
`

ButtonWrapper.defaultProps = {
  theme: colors.primary,
}

export default ButtonWrapper
