import * as Styled from './StyledButton';

interface btnProps {
  text : string;
  variant? : 'primary' | 'secondary';
  className? : string;
}

export default function Button(props: btnProps): JSX.Element {
  const {text, variant='primary', className} = props;
  
  return (
    <Styled.Btn variant={variant} className={className} >
      <Styled.SpanBtn> {text} </Styled.SpanBtn>
    </Styled.Btn>
  )
} 
