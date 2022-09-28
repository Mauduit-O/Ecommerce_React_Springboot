import styled from 'styled-components'

export const BtnForm = styled.button`
  width: 100%;
  // width: 92vw;
  border-radius: 2px;
  height: 5vh;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  // margin: 2% 4%;
  position: relative;
  overflow: hidden;	

  &.btnDark {
    border: none;
    background: black;
    color: white;

    &:after  {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 890%;
      width: 140%;
      background: #0B7698;
      -webkit-transition: all .8s ease-in-out;
      transition: all .8s ease-in-out;
      -webkit-transform: translateX(-90%) translateY(-15%) rotate(53deg);
      transform: translateX(-90%) translateY(-1%) rotate(53deg);
    }
    &:hover:after {
      -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
      transform: translateX(-9%) translateY(-25%) rotate(45deg);
    }
  }

  &.btnLight{
    color: black;
    background: white;
    border: 1px solid black;
    &:hover{
      background: #0B7698;
      color: white;
      border: none;
    }
  }
`
export const SpanBtn = styled.span`
	display: block;
	position: relative; 
  z-index: 1;
  margin-bottom: 0;
  margin-left: 10px;

  &.btnLight{
    color: black;
  }
  &.btnBlack{
    color: white;
  }
`