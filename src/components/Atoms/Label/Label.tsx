import {LabelProps, StyledLabel} from './styled'

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


