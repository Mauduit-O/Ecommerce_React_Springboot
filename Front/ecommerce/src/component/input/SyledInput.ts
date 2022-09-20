import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;

  border: none !important;
  border-bottom: 1px solid black !important;
  border-radius: 0 !important;
  margin-bottom: 7%;
  padding-bottom: 2%;
  caret-color: #995E06;
  cursor: pointer;
  -webkit-text-fill-color: black; 
  font-size: 12px;   

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    background: none;
    width: 0;
    border: none;
  }

  &:focus  {
    font-size: 12px;
    outline-width: 0; 
    -webkit-text-fill-color: #995E06; 
  } 

  &:active {
    font-size: 12px;
    outline-width: 0; 
    -webkit-text-fill-color: #995E06; 
  } 

  @media (-webkit-min-device-pixel-ratio:0) { 
	&:focus { 
		font-size: 14px; 
 		outline:  none;
	} 

  @media (min-width: 604px) {
		font-size: 14px;    
    margin-bottom: 7%;
	}

  &.shortInput {
    // width: 32vw;
    width: 100%;
  
    &:nth-child(even) {
      margin-left: 5%;
    }
  }
`

