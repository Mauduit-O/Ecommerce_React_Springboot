import styled from 'styled-components';

export const Hero = styled.div`
  position: relative;
  height: auto;
  margin-bottom: 2%;
`

export const HeroImg = styled.img`
  width: 100vw;
  height: 38vh;

  @media (min-width: 460px) {
    height: 38vh;
  }

  @media (min-width: 800px) {
    height: 70vh;
  }

  @media (min-width: 1000px) {
    height: 75vh;
  }

  @media (min-width: 1200px) {
    height: 80vh;
  }

  @media (min-width: 2000px) {
    height: 84vh;
  }
`

export const ContainerTextHero = styled.div`
  position: absolute;
  bottom: 0;
  color: white;
  margin: 5%;

  @media (min-width: 800px) {
    margin: 3%;
  }
}
`

export const TitleHero = styled.h1`
  font-size: 12px;

  @media (min-width: 460px) {
    font-size: 14px;
  }

  @media (min-width: 800px) {
    font-size: 26px;
  }

  @media (min-width: 1600px) {
    font-size: 32px;
  }
`

export const SubtitleHero = styled.h2`
  font-size: 8px;

  @media (min-width: 460px) {
    font-size: 10px;
  }

  @media (min-width: 800px) {
    font-size: 16px;
  }

  @media (min-width: 2500px) {
    font-size: 18px;
  }
`