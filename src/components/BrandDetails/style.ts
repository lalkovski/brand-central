import Flex from 'components/Flex'
import styled from 'styled-components'

export const BrandDetailsWrapper = styled(Flex)`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.1);
  margin-right: 0;
`

export const BrandTitle = styled.h1`
  font-size: 48px;
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
  font-size: 30px;
  font-weight: 600;
  opacity: 0.6;
`
