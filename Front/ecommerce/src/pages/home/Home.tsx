import * as Styled from './StyledHome'
import ImgHero from "../../assets/img/hero-moto.jpeg"
import CardCategory from '../../component/cardCategory/cardCategory';
import ImgMotoCategory from '../../assets/img/category-moto.jpeg';
import ImgBikeCategory from '../../assets/img/category-bike.jpeg';
import ApiCategory from '../../hooks/hookApi';
export default function Home() {

  return (
    <>
      <Styled.Hero>
        <Styled.HeroImg src={ImgHero} alt='Image moto HarleyD'/>
        <Styled.ContainerTextHero>
          <Styled.SubtitleHero>New arrivage</Styled.SubtitleHero>
          <Styled.TitleHero>Motos H-D® 2022</Styled.TitleHero>
        </Styled.ContainerTextHero>
      </Styled.Hero>

      <CardCategory imgCardCat={ImgMotoCategory} titleCard='Un style typique qui vous propulse vers l’avenir'></CardCategory>
      <CardCategory imgCardCat={ImgBikeCategory} titleCard='Prêt à conquérir des collines difficiles'></CardCategory>
      <ApiCategory></ApiCategory>
      {/* <Styled.ContainerCategory></Styled.ContainerCategory> */}
      
    </>
  )
}