import styled from 'styled-components'

export const ModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 4;	
  top: 0;
  left: 0;
  right:0;
  bottom: 0;
  background: #000000e0;;
  overflow: auto; 

  @media (min-width: 820px) {
    justify-content: center;
    align-items: center;
  }
`
export const ContainerModalForm= styled.div`
  background: white;
  height: 84vh;
  width: 84vw;

  @media (min-width: 604px) {
    width: 66vw;
    height: auto;
    justify-content: flex-start;
  }

  @media (min-width: 800px) {
    width: 50vw;
    height: auto;
  }

  @media (min-width: 1200px) {
    width: 34vw;
  }
` 

export const ContainerIconClose = styled.div`
  text-align: end;
`

export const IconClose = styled.img`
  	margin: 8% 10%;
  	cursor: pointer;
  	transition: 1s;

  &::hover {
    transform: scale(1.2);
  }

  @media screen and (min-width: 820px) {
		width: 18px;
	  margin: 6% 8%;
	}
` 

export const TitleModal = styled.h1`
  font-size: 18px;
  text-align: center;
  font-family: "Avenir-black";
  margin-bottom: 14%;

  @media (min-width: 604px) {
    margin-bottom: 14%; 
  }
  @media (min-width: 800px) {
    font-size: 22px;
    margin-bottom: 15%;
  }
` 

export const ContentModal = styled.div`
  // height: 70vh;
  margin-bottom: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 604px) {
    height: auto;
  }
` 
