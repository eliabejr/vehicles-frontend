import * as React from 'react'
import { TableWrapper, Td, Th, Thead, Tr, Tbody, SearchFieldWrapper } from './styles';

import { InputStyled, HelperText, Label } from '@/components/form-fields/form-field-styles'

export * from './styles'

interface TableProps {
  headers?: any
  children?: React.ReactNode
}

interface SearchFieldProps {
  label?: string
  helperText?: string
  placeholder?: string
  error?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const SearchField: React.FC<SearchFieldProps> = ({
  label,
  helperText,
  error,
  placeholder,
  onChange,
}) => (
  <SearchFieldWrapper>
    {!label ? null : <Label>{label}</Label>}
    <InputStyled
      type='text'
      placeholder={placeholder}
      onChange={onChange}
    />
    {!helperText ? null : <HelperText isError={error}>{helperText}</HelperText>}
  </SearchFieldWrapper>
)
export const Table: React.FC<TableProps> = ({ headers, children }) => {
  return (
    <>
      <TableWrapper>
        <Thead>
          <Tr>
            {headers.map((item: any) => {
              return (<Th>{item}</Th>)
            })}
          </Tr>
        </Thead>
        <Tbody>
          {children}
        </Tbody>
      </TableWrapper>
    </>
  )
}
