import { CSSProperties, ReactNode } from 'react'
import { StyledFlex } from './style'

interface ISurfaceProps {
  children: ReactNode
  width?: string
  height?: string
  margin?: string
  padding?: string
  hasLeftMargin?: boolean
  hasRightMargin?: boolean
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
}

export const Surface = ({
  children,
  width,
  height,
  margin,
  padding,
  hasLeftMargin = true,
  hasRightMargin = false,
  justifyContent,
  alignItems,
}: ISurfaceProps) => {
  return (
    <StyledFlex
      $widthProp={width}
      $heightProp={height}
      $marginProp={margin}
      $paddingProp={padding}
      flexDirection='column'
      $hasLeftMargin={hasLeftMargin}
      $hasRightMargin={hasRightMargin}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </StyledFlex>
  )
}
