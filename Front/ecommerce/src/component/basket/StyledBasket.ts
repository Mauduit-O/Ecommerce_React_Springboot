import styled from 'styled-components';

export const BasketIsEmpty = styled.h1`
  font-size: 18px;
  padding: 3%
`

export const ContainerOverflow = styled.div`
  max-height: 46vh;
  overflow: scroll;
  margin-bottom: 20%;

  @media (min-width: 430px) {
    max-height: 54vh;
    margin-bottom: 22%;
  }
  
  @media (min-width: 604px) {
    max-height: 54vh;
    margin-bottom: 20%;
  }

  @media (min-width: 800px) {
      max-height: 56vh;
      margin-bottom: 20%;
  }
`
export const BottomBasket = styled.div`
  position: absolute;
  bottom: 29px;
  left: 0;
  right: 0;
  padding: 4% 2%;
`
export const ContainerBtn = styled.div`
	display: flex;
  justify-content: center;	
`

export const ContainerOder= styled.div`
  // margin: 5% 4%;
  padding: 0 5%;
`
export const MsgConfirm = styled.p`
  text-align: justify;
  line-height: 24px;

  @media (min-width:820px){
      line-height: 28px;
  }
`

export const MsgEnd= styled.p`
  text-align: center;
  font-weight:bold;
  margin-top: 10%;
`
