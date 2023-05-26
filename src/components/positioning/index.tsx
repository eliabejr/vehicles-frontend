import styled from 'styled-components'

interface RowProps {
  wrap?: string
  gap?: string
  width?: string
  alignItems?: string
  justifyContent?: string
  padding?: string
  paddingTop?: string
  paddingBottom?: string
  paddingLeft?: string
  paddingRight?: string
  margin?: string
  marginTop?: string
  marginLeft?: string
  marginBottom?: string
  marginRight?: string
  columnOnMobile?: boolean
  wordBreak?: string
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: ${(props) => props.wrap || 'no-wrap'};
  grid-gap: ${(props) => props.gap || 'inherit'};
  width: ${(props) => props.width || '100%'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  padding-top: ${(props) => props.paddingTop || props.padding || 0};
  padding-bottom: ${(props) => props.paddingBottom || props.padding || 0};
  padding-left: ${(props) => props.paddingLeft || props.padding || 0};
  padding-right: ${(props) => props.paddingRight || props.padding || 0};
  margin-top: ${(props) => props.marginTop || props.margin || 0};
  margin-bottom: ${(props) => props.marginBottom || props.margin || 0};
  margin-right: ${(props) => props.marginRight || props.margin || 0};
  margin-left: ${(props) => props.marginLeft || props.margin || 0};
  word-break: ${(props) => props.wordBreak};
  @media (max-width: 960px) {
    flex-direction: ${(props) => (props.columnOnMobile ? 'column' : 'row')};
  }
`

interface ColumnProps {
  gap?: string
  width?: string
  alignItems?: string
  justifyContent?: string
  padding?: string
  paddingTop?: string
  paddingBottom?: string
  paddingLeft?: string
  paddingRight?: string
  margin?: string
  marginTop?: string
  marginLeft?: string
  marginBottom?: string
  marginRight?: string
  mobileFullWidth?: boolean
  cursor?: 'pointer' | 'none' | 'not-allowed' | 'progress'
}

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || '100%'};
  grid-gap: ${(props) => props.gap || 'inherit'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  padding-top: ${(props) => props.paddingTop || props.padding || 0};
  padding-bottom: ${(props) => props.paddingBottom || props.padding || 0};
  padding-left: ${(props) => props.paddingLeft || props.padding || 0};
  padding-right: ${(props) => props.paddingRight || props.padding || 0};
  margin-top: ${(props) => props.marginTop || props.margin || 0};
  margin-bottom: ${(props) => props.marginBottom || props.margin || 0};
  margin-right: ${(props) => props.marginRight || props.margin || 0};
  margin-left: ${(props) => props.marginLeft || props.margin || 0};
  cursor: ${(props) => props.cursor};

  @media (max-width: 960px) {
    width: ${(props) => (props.mobileFullWidth ? '100%' : props.width || '100%')};
  }
`

interface GridProps {
  gap?: string
  width?: string
}

export const GridLayout = styled.div<GridProps>`
  display: grid;
  grid-gap: ${(props) => props.gap || 'inherit'};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: ${(props) => props.width || '100%'};

  @media (max-width: 960px) {
    width: 100%;
  }
`

interface GridItemProps {
  column?: string
  row?: string
  columnSpan?: string
  rowSpan?: string
}

export const GridItem = styled.div<GridItemProps>`
  grid-column-start: ${(props) => props.column};
  grid-column-end: span ${(props) => props.columnSpan};
  grid-row-start: ${(props) => props.row};
  grid-row-end: span ${(props) => props.rowSpan};

  @media (max-width: 960px) {
    grid-column-end: auto;
  }
`
