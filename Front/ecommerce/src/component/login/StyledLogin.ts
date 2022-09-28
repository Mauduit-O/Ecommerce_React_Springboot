import styled from 'styled-components'

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 10%;
  margin: 8%;
`

export const ContainerAlertMsg = styled.div`
  width: 100%;
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