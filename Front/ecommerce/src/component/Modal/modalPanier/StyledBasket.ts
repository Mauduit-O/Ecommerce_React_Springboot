import styled from 'styled-components';

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
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4% 0;
`

export const ContainerBtn = styled.div`
	display: flex;
  justify-content: center;	
`

//top

// .modal-header-panier {
// 	border-bottom: none;
// }

// .modal-panier-body {
// 	padding: 0;
// }

// .container-modal-panier-top {
//     display: flex;
//     justify-content: space-between;	
//    	margin-top: 4%;
//   	padding: 0 4%;
//    	border-bottom: 1px solid black;
// }





