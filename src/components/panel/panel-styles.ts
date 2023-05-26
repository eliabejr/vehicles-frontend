import styled from 'styled-components'

import { colors, sizes, border } from '@/utils/theme'

export const PanelWrapper = styled.section`
  background-color: #fff;
  border-color: #E2E8F0;
  border-radius: ${border.md};
  border-width: ${border.sm};
  width: ${sizes.full};
  /* z-index: 1; */
`

export const PanelContent = styled.div`
  padding-top: ${sizes.s6};
`

export const PanelTitles = styled.div`
  border-width: 0;
  border-bottom-width: ${border.sm};
  border-color: #f1f1f1;
  border-style: solid;
  padding-top: ${sizes.s6};
  padding-bottom: ${sizes.s6};
`

export const PanelHeading = styled.h3`
  color: #1f2936;
  font-size: ${sizes.s5};
  font-weight: 500;
`

export const PanelSubheading = styled.h4`
  color: #9ca3ae;
  font-size: ${sizes.s3};
  font-weight: 400;
  margin-top: 5px;
`
