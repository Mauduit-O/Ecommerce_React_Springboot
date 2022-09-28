import styled from 'styled-components';

export const ContainerForm= styled.div`
  margin: 0 10% 0;

  @media (min-width: 604px) {
      margin: 0% 10% 0;
  }
`
export const ContentInput = styled.div`
  overflow: hidden;
`

export const ContainerInput = styled.div`
  margin-bottom: 10%;
`

export const ContainerShortInput = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2%;
`

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`

export const Btn = styled.input`
  border: none;
  width: 68vw;
  height: 6vh;
  align-self: center;
  background: black;
  color: white;
  border-radius: 4px;
  font-size: 12px;
  text-transform: uppercase;

  &:hover  {
    border: 2px solid black;
    background: white;
    color: black;
  }

  @media (min-width: 604px) {
    width: 53vw;
    height: 5vh;
    font-size: 14px;
    margin-bottom: 18%;
  }

  @media (min-width: 820px) {
    width: 40vw;
    height: 44px;
    font-size: 14px;
    margin-bottom: 12%;
  }

  @media (min-width: 1200px) {
    width: 28vw;
  }
`

export const ContainerAlertMsg = styled.div`
  text-align: center;
  margin-top: 2%;
  padding: 2%;
  background: #f69e0d;;
  margin-bottom: 0;
`

export const AlertMsg = styled.p`
  margin-bottom: 0;
  color: white;
  font-size: 11px;
  letter-spacing: 1px;
  font-family: 'Avenir-heavy';

  @media d (min-width: 820px) {
  font-size: 12px;
  }
`

export const RegisterSuccesfull = styled.p`
  color: white;
  background-color: #3ea3ce;
  margin-bottom: 8%;
  text-align: center;
`
