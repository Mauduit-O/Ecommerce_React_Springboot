import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  width: 100vw;
  margin-top: 4%;
  color: white;

  @media (min-width: 604px) {
    font-size: 12px;
  }

  @media (min-width: 800px) {
    font-size: 12px;
  }

  @media (min-width: 1200px) {
    font-size: 12px;
    margin-top: 8%;
  }
`
export const ContainerFooterTop = styled.footer`
  height: 16vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #202020;
  text-transform: uppercase;	
  padding: 0 4%;
  font-size: 10px;

  @media (min-width: 604px) {
    font-size: 12px;
  }

  @media (min-width: 800px) {
    height: 14vh;
		font-size: 14px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
  }

  @media (min-width: 1200px) {
    height: 14vh;
    font-size: 18px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
  }
`
export const FooterTopText = styled.p`
  @media (min-width: 800px) {
		font-size: 18px;
  }
`
export const FooterTopSpan= styled.span`
  color: #6B6B6B;
  margin-left: 6px;
`
export const BtnPhone = styled.button`
  position: relative;
  width: 152px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background: transparent;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;	

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 140%;
    background: #EFBE11;
    -webkit-transition: all .8s ease-in-out;
    transition: all .8s ease-in-out;
    -webkit-transform: translateX(-150%) translateY(-25%) rotate(45deg);
    transform: translateX(-150%) translateY(-25%) rotate(45deg);
  }

  &:hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }

  @media (min-width: 604px) {
    width: 170px;
    height: 46px;
  }

  @media (min-width: 800px) {
    width: 210px;
  }
`
export const BtnPhoneText = styled.p`
  position: relative; 
  z-index: 1;
  margin-left: 10px;
` 
export const BtnPhoneImg = styled.img`
  position: relative; 
  z-index: 1;
` 
export const ContainerFooterBody= styled.div`
  background: #161616;
  padding: 8% 4%;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    padding: 8% 10%;
  }
`
export const FooterBodyUl= styled.ul`
  list-style: none;
  padding-left: 0 !important;
  font-size: 12px;
  text-transform: uppercase;

  @media (min-width: 604px) {
	  font-size: 14px;
  }

  @media (min-width: 800px) {
	  display: flex;
   	justify-content: space-between;
   	font-size: 18px;

    &:first-child {
    	margin-bottom: 6%;
	  }
  }
`
export const FooterBodyLi= styled.li`
  margin-bottom: 6%;
  text-align: center;
  cursor: pointer;

  @media (min-width: 604px) {
	  font-size: 14px;
  }

  @media (min-width: 800px) {
    margin-bottom: 0;
  }
`
export const FooterBodyLink= styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: #de9d3d;
  }
`
export const IconMedia= styled.img`
  cursor: pointer;
  transition-duration: 1s;

  &:hover {
    transform: scale(1.4);
  }

  &:nth-child(odd) {
    margin: 0 8px;
  }
`
export const FooterBottom= styled.div`
  height: 6vh;
  display: flex;
  align-items: center;
  padding: 0 4%;
  background: #000000;
`
export const FooterBottomText= styled.p`
  font-size: 10px;

  @media (min-width: 604px) {
    font-size: 12px;
  }

  @media (min-width: 820px) {
    font-size: 14px;
  }
`