import styled from 'styled-components'

export const CardProduct = styled.div`
  width: 90vw;
  margin-right: 4%;
  flex: 0 0 auto;
  padding: 6% 6%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));
  background: white;
  margin-bottom: 4%;

  @media (min-width: 820px) {
    width: 47vw;
    margin-right: 0;
    margin-bottom: 2%;
  }
  @media (min-width: 1200px) {
    width: 30vw;
    margin-bottom: 1%;
    padding: 3% 3%;	
    margin-right: 1%;

    &:nth-child(3n) {
      margin-right: -2%;
    }
  }
`
export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`
export const Title = styled.h1`
  font-size: 16px;	
  @media (min-width: 820px) {
    font-size: 20px;	
  }
`
export const LinkMore = styled.a`
	font-family: "Avenir-light";
	font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  cursor: pointer;

  &:hover{
    color: #DEB72D;
  }

  @media screen and (min-width: 820px) {
    font-size: 14px;	
  }
`
export const ContainerImg = styled.div`
  text-align: center;
  height:300px;
`    
export const ImgProduct = styled.img`
  text-align: center;
  width: 70vw;
  margin-top:5%;
  margin-bottom:5%;

  @media screen and (min-width: 500px) {
    width: 48vw; 
  }

  @media screen and (min-width: 820px) {
    width: 300px;
    padding-top:5%;  
  }
`
export const CardBottom = styled.div`
  display: flex;
`
export const ContainerInfos = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  align-content: center;
  margin-bottom: 0;
`
export const Price = styled.p`
  margin-bottom: 0;
  font-size: 16px;
  margin-right: 10px;

  @media screen and (min-width: 800px) {
    font-size: 18px;
  }
`
export const InfosSpan = styled.span`
	margin-left: 4px;
  font-size: 14px;
  color: #DEB72D;

  @media screen and (min-width: 800px) {
    font-size: 16px;
  }
`
export const ContainerIcons = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`   
export const BtnAdd = styled.button`
  background:transparent;
  border:none;
`   
export const IconAddBasket = styled.img`
  margin-left: 24px;
  cursor: pointer;
  transition-duration: 1s;

  &:hover {
    transform: scale(1.2);
  }
  @media screen and (min-width: 800px) {
    width: 25px;
  }
`