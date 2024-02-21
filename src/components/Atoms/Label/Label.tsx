import {LabelProps, StyledLabel} from './Label.style'

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


