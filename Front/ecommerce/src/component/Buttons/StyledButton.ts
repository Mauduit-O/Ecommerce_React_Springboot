import styled from 'styled-components';

export const Btn = styled.button<{ 
  variant: 'primary' | 'secondary'; 
}>`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 8px;
  background: black;
  border: ${({ variant }) => (variant === 'primary' ? '3px solid white ': 'none')};
  color: white;
  font-size: 24px;
  font-family: AvenirRoman;
  margin-top: 9%;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 150%;
    background: #0B7698;
    -webkit-transition: all .8s ease-in-out;
    transition: all .8s ease-in-out;
    -webkit-transform: translateX(-150%) translateY(-25%) rotate(45deg);
    transform: translateX(-150%) translateY(-25%) rotate(45deg);
  }

  &:hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }

  &.btnCardCat {
    width:  217px;
    height: 38px;
    font-size: 18px;

    @media (min-width: 800px) {
      width: 265px;
      height: 50px;
    }
  }
`;
export const SpanBtn = styled.span`
	position: relative; 
  	z-index: 1;
    margin-bottom: 0;
    margin-left: 10px;
`