import styled from 'styled-components'
import { IoChevronDownSharp } from 'react-icons/io5'
import { colors, sizes } from '@/utils/theme'

interface FieldWrapperProps {
  marginBottom: string
  marginRight: string
  marginLeft: string
  marginTop: string
}

interface FieldProps {
  isError?: boolean
  color?: string
  background?: string
  border?: string
}

export interface OptionProps {
  color: string
}

interface FieldsetProps {
  direction: string;
}

export const FieldWrapper = styled.div<FieldWrapperProps>`
  margin-bottom: ${(props) => props.marginBottom};
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  width: 100%;
  cursor: ${(props) => props.onClick ? 'pointer' : 'auto'};
`

export const InputStyled = styled.input<FieldProps>`
  background: ${(props) => props.background};
  border-color: ${(props) => props.isError ? colors.error : props.border};
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  color: ${(props) => props.isError ? colors.error : props.color};
  display: block;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif;
  margin: 10px 0;
  padding: 15px;
  transition: all 0.2s;
  width: 100%;
  -webkit-appearance: none;
  outline: none;
  cursor: ${(props) => props.onClick ? 'pointer' : 'auto'};

  &[type='date'] {
    padding: 13px 15px;
  }
`

export const Option = styled.option<OptionProps>`
  color: ${({ color }) => color};
`

export const SelectStyled = styled.select<any>`
  background: ${(props) => props.background || '#fff'};
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  display: block;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif;
  margin: 10px 0;
  padding: 15px;
  transition: all 0.2s;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  color: ${props => props?.selectedFisrt ? `#9ca3ae!important` : props.color};

  & option {
    color: #000;
  }
  
  :focus {
    box-shadow: 0 0 1px 1px #ffbf3a;
    box-shadow: 0 0 0 1px -moz-mac-focusring;
    outline: none;
  }
`

export const SelectFieldIcon = styled(IoChevronDownSharp)`
  position: relative;
  margin-left: -40px;
  font-size: 1.1rem;
  margin-top: 24px;
  color: #9ca3ae;
`

interface LabelProps {
  color?: string
}

export const Label = styled.label<LabelProps>`
  color: ${(props) => props.color};
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif;
  font-size: ${sizes.s4};
  font-weight: 600;
`

export const HelperText = styled.span<FieldProps>`
  color: ${(props) => props.isError ? colors.error : props.color};
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif;
  font-size: ${sizes.s3};
  padding-left: 3px;
`

export const TextAreaStyled = styled.textarea<any>`
  background: #fff;
  border-color: ${(props) => props.border || '#d1d5da'};
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  color: #111826;
  display: block;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif;
  margin: 10px 0;
  padding: 15px;
  transition: all 0.2s;
  width: 100%;
  -webkit-appearance: none;

  &:invalid {
    border-color: tomato;
    border-width: 1px;
    border-style: solid;
    color: tomato;
  }

  &[type='date'] {
    padding: 13px 15px;
  }
`
export const FieldsetWrapper = styled.fieldset<FieldsetProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  border: none;
  margin-top: 10px;
`

export const Radio = styled.input<any>`
  display: grid;
  place-content: center;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 1px solid;
  border-color: ${(props) => props.border || '#d1d5da'};
  border-radius: 50%;
  margin-right: 10px;

  &::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #ffbf3a;
  }

  &:checked::before {
    transform: scale(1);
  }
`

export const CheckboxInput = styled.input`
  display: grid;
  place-content: center;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 1px solid;
  border-color: #d1d5da;
  border-radius: 3px;

  &::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 3px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #ffbf3a;
  }

  &:checked::before {
    transform: scale(1);
  }
`

export const CheckboxLabel = styled.label<LabelProps>`
  color: ${(props) => props.color || '#6b778c'};
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
`