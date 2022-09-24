import * as Styled from './StyledAlertMsg';

interface MsgProps {
  msg?: string;
}

export default function AlertMsg(props: MsgProps): JSX.Element {

  const {msg} = props; 

  return (
    <Styled.ContainerAlertMsg>
      <Styled.AlertMsg>{msg}</Styled.AlertMsg>
    </Styled.ContainerAlertMsg>
  )
}
