import styled from 'styled-components'

export const Container = styled.div`
  background: #f8f8f8;
  padding: 2%;
	flex-wrap: nowrap;
	overflow-x: auto;
	margin: 3%;
	-webkit-overflow-scrolling: touch;
	display: flex;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 800px) {
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0;
  }
  @media (min-width: 1200px) {
    margin: 2% 2% 7%;
    justify-content: flex-start;
  }
`












// @media screen and (min-width: 1200px) 
// {
// 	.container-categorie button  {
// 		margin: 0% 4% 2%;
// 	}
// }