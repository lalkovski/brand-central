import { isMobile } from 'helpers/helperFunctions'
import styled from 'styled-components'

export const BrandName = styled.h1`
  font-size: ${() => (isMobile() ? '32px' : '48px')};
  font-weight: 700;
  margin-bottom: 10px;
`

export const ImageWrapper = styled.div`
  width: 300px;
  height: 200px;

  & > img {
    max-width: 100%;
    height: auto;
  }
`

export const BrandDescription = styled.p<{ $hasTopMargin?: boolean }>`
  margin: ${({ $hasTopMargin }) => ($hasTopMargin ? '100px' : '0')} 0 0 0;

  & > span {
    font-weight: 700;
  }
`

export const NoBrandSelectedText = styled.h1`
  margin: 0;
  font-size: ${() => (isMobile() ? '20px' : '30px')};
  font-weight: 600;
  opacity: 0.6;
`
