import * as Styled from './StyledBtnModal'

interface BtnModalProps {
  className?: string;
  text: string;
}
export default function StyledBtnModal(props: BtnModalProps): JSX.Element {
  const {className, text} = props
  return (
    <Styled.BtnBasket className={className}>
      <Styled.SpanBtn>{text}</Styled.SpanBtn>
    </Styled.BtnBasket>
  )
}
