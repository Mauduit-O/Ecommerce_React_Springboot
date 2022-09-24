import styled from 'styled-components';

export const ContainerCategory = styled.div`
  @media (min-width: 800px) {
    display: flex;
  }
  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
`
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  background: #171717;
  padding: 4%;

  @media (min-width: 800px) {
    width: 40vw;
  }

  @media (min-width: 1200px) {
    width: 30vw;
  }
`
export const TitleCardCategory = styled.h1`
  width: 73vw;
  font-size: 17px;
  color: white;
  font-family; 'AvenirLight';

  @media (min-width: 520px) {
    font-size: 24px;
    letter-spacing: 1.5px;
  }

  @media (min-width: 800px) {
    width: auto;
  }
` 
export const CardCategoryImg = styled.img`
  width: 100vw;
  height: ;

  @media (min-width: 460px) {
    height: ;
  }

  @media (min-width: 800px) {
    width: 60vw;
    height: 55vh;
    object-fit: cover;
  }

  @media (min-width: 1200px) {
    width: 70vw;
  }

  @media (min-width: 1600px) {
    height: ;
  }

  @media (min-width: 2000px) {
    height: ;
  }
`