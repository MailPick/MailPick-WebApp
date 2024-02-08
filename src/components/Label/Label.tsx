
import {LabelProps, StyledLabel} from './Label.styles'

export const Label = ({
  fontSize,
  fontBold = false, 
  children,
  tagType = 'span',
}: LabelProps) => (
  <StyledLabel as={tagType} fontSize={fontSize} fontBold={fontBold}>
    {children}
  </StyledLabel>
);


