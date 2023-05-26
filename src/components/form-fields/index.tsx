/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */

import React from 'react'

import { Column, Row } from '@/components/positioning'

import {
  FieldWrapper,
  InputStyled,
  SelectStyled,
  SelectFieldIcon,
  Label,
  HelperText,
  TextAreaStyled,
  Radio,
  FieldsetWrapper,
  CheckboxLabel,
  CheckboxInput,
} from './form-field-styles'

interface FormFieldBaseProps {
  name?: string
  type?: string
  label?: string
  placeholder?: string
  value?: any
  error?: boolean
  onKeyPress?: (event: React.KeyboardEvent) => void
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  onChangeAny?: any
  required?: boolean
  helperText?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
  marginTop?: string
  disabled?: boolean
  defaultValue?: any,
  children?: React.ReactNode
  color?: string
  background?: string
  border?: string
}

interface InputProps extends FormFieldBaseProps {
  step?: string
  min?: string
  max?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
}

interface TextAreaProps extends FormFieldBaseProps {
  rows?: number
  cols?: number
  error?: boolean
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}

interface SelectProps extends FormFieldBaseProps {
  defaultValue?: string
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  selectedFisrt?: boolean
  multiple?: boolean
}

interface DatePickerProps extends FormFieldBaseProps {
  min?: string
  max?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

interface RadioProps extends FormFieldBaseProps {
  legend?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  checked?: boolean
}
interface FieldsetProps {
  legend?: string
  error?: boolean
  helperText?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
  marginTop?: string
  children: React.ReactNode
  color?: string
  background?: string
}
interface CheckboxProps extends FormFieldBaseProps {
  legend?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  checked?: boolean
}

function RenderLabel(label: string, name: string, color: string) {
  return (
    <Label htmlFor={name} color={color}>{label}</Label>
  )
}

function RenderHelperText(error: boolean, helperText: string, color: string) {
  return (
    <HelperText isError={error} color={color}>{helperText}</HelperText>
  )
}

export const Input: React.FC<InputProps> = ({
  name,
  type,
  label,
  value,
  step,
  min,
  max,
  error,
  disabled,
  placeholder,
  onChange,
  onKeyPress,
  onClick,
  required,
  helperText,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  defaultValue,
  color,
  background,
}) => (
  <FieldWrapper
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
    onClick={onClick}
  >
    {!label ? null : RenderLabel(label, name, color)}
    <InputStyled
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={value}
      step={step}
      min={min}
      max={max}
      disabled={disabled}
      isError={error}
      onClick={onClick}
      defaultValue={defaultValue}
      color={color}
      background={background}
    />
    {!helperText ? null : RenderHelperText(error, helperText, color)}
  </FieldWrapper>
)

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  children,
  placeholder,
  defaultValue,
  value,
  required,
  error,
  helperText,
  marginBottom,
  marginLeft,
  onChange,
  marginRight,
  marginTop,
  selectedFisrt,
  multiple,
  disabled,
  color,
  background,
  border
}) => (
  <FieldWrapper
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
  >
    {!label ? null : RenderLabel(label, name, color)}
    <Row>
      <SelectStyled
        multiple={multiple}
        name={name}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        selectedFisrt={selectedFisrt}
        disabled={disabled}
        background={background}
        border={border}
        color={color}
      >
        {children}
      </SelectStyled>
      <SelectFieldIcon />
    </Row>
    {!helperText ? null : RenderHelperText(error, helperText, color)}
  </FieldWrapper>
)

export const DatePicker: React.FC<DatePickerProps> = ({
  name,
  label,
  min,
  max,
  error,
  required,
  helperText,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  value,
  onChange,
  color,
  background
}) => (
  <FieldWrapper
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
  >
    {!label ? null : RenderLabel(label, name, color)}
    <InputStyled
      type="date"
      name={name}
      required={required}
      min={min}
      max={max}
      isError={error}
      value={value}
      onChange={onChange}
    />
    {!helperText ? null : RenderHelperText(error, helperText, color)}
  </FieldWrapper>
)

export const TextAreaInput: React.FC<TextAreaProps> = ({
  name,
  rows,
  cols,
  label,
  value,
  disabled,
  placeholder,
  onChange,
  onKeyPress,
  required,
  helperText,
  error,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  color,
  background
}) => (
  <FieldWrapper
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
  >
    {!label ? null : RenderLabel(label, name, color)}
    <TextAreaStyled
      name={name}
      placeholder={placeholder}
      required={required}
      onKeyPress={onKeyPress}
      onChange={onChange}
      value={value}
      rows={rows}
      cols={cols}
      disabled={disabled}
    />
    {!helperText ? null : RenderHelperText(error, helperText, color)}
  </FieldWrapper>
)
export const Fieldset: React.FC<FieldsetProps> = ({
  legend,
  helperText,
  error,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  children,
  color,
  background
}) => (
  <FieldWrapper
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
  >
    {!legend ? null : <legend>{legend}</legend>}
    {!helperText ? null : RenderHelperText(error, helperText, color)}
    <FieldsetWrapper direction='row'>
      {children}
    </FieldsetWrapper>
  </FieldWrapper>
)

export const RadioInput: React.FC<RadioProps> = ({
  name,
  label,
  placeholder,
  value,
  disabled,
  onChange,
  required,
  checked,
  color,
  background
}) => (
  <Row>
    <Radio
      type='radio'
      name={name}
      id={name}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      value={value}
      disabled={disabled}
      checked={checked}
    />
    {!label ? null : RenderLabel(label, name, color)}
  </Row>
)
export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  legend,
  value,
  disabled,
  onChange,
  required,
  checked,
  color,
  background
}) => (
  <Column>
    {!legend ? null : <legend>{legend}</legend>}
    <Row>
      <CheckboxInput
        type='checkbox'
        name={name}
        id={name}
        required={required}
        onChange={onChange}
        value={value}
        disabled={disabled}
        checked={checked}
      />
      {!label ? null : <CheckboxLabel htmlFor={name}>{label}</CheckboxLabel>}
    </Row>
  </Column>
)
