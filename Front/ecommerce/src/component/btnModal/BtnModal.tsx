import * as Styled from './StyledBtnModal'

interface BtnModalProps {
  className?: string;
  text: string;
  type?: string;
  // value?: string;
  name?: string;
}
export default function StyledBtnModal(props: BtnModalProps): JSX.Element {
  const {className, text, type, name} = props
  return (
    <Styled.BtnForm className={className}>
      <Styled.SpanBtn>{text}</Styled.SpanBtn>
    </Styled.BtnForm>
  )
}
