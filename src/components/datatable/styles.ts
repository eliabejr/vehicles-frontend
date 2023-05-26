import styled from 'styled-components'

import { sizes } from '@/utils/theme'

export const Caption = styled.caption`
  text-align: center;
  font-size: 0.875rem;
  color: #4a5568;
  caption-side: bottom;
`

export const TableWrapper = styled.table`
  font-variant-numeric: lining-nums tabular-nums;
  border-collapse: collapse;
  width: ${sizes.full};
`

export const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
`

export const Td = styled.td`
  padding: 12px 15px;
`

export const Tfoot = styled.tfoot`
  display: table-footer-group;
  vertical-align: middle;
  display: block;
    margin-left: auto;
    margin-right: autos

  & th {
    border-bottom-width: 0px;
    padding-bottom: 0;
  }
`
export const TPagination = styled.tfoot`
    background-color: #000000;
    height: 12%;
    margin-left: 170%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Th = styled.th`
  display: table-cell;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  line-height: 1rem;
  font-size: 0.75rem;
  color: #6B778C;
  border-color: #edf2f7;
  padding: 12px 15px;
`

export const Thead = styled.thead`
  border-collapse: collapse;
  display: table-header-group;
  font-variant-numeric: lining-nums tabular-nums;
  text-align: left;
  padding: 12px 15px;
`

export const Tr = styled.tr`
  padding: 12px 15px;

  :nth-of-type(even) {
      background-color: rgba(226, 232, 240, 0.5);
  }

  &:last-child {
    /* padding-inline-end: 0; */
    border: none;
  }
`

export const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`

interface PropsStyledTable {
  color?: string
  background?: string
}

export const StyledTable = styled.div<PropsStyledTable>`
  & [role=columnheader] > div {
    display: table-cell;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    line-height: 1rem;
    font-size: 0.75rem;
    font-weight: 800;
    color: ${(props) => props.color}!important;
    opacity: 0.8;
  }

  & [role=row] {
    background-color: ${(props) => props.background}!important;
    color: ${(props) => props.color}!important;
    padding-left: 10px;
  }

  & button {
    color: ${(props) => props.color}!important;
    fill: ${(props) => props.color}!important;
  }
`
export const customStyles = {
  rows: {
    style: {
      fontWeight: 700,
    },
  },
}

export const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 30px;
  width: 28px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const SearchFieldWrapper = styled.div`
  margin-top: -15px;
`
