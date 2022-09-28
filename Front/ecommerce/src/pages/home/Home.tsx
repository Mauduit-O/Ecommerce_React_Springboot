import * as Styled from './StyledHome'
import ImgHero from "../../assets/img/hero-moto.jpeg"
import CardCategory from '../../component/cardCategory/cardCategory';
import {useState, useEffect} from "react";
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState<any>([]);
  
  const fetchData = () => {
    axios 
    .get('/category', {
      baseURL: 'http://localhost:8082',
    })
    .then((response) => {
      setData(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <Styled.Hero>
        <Styled.HeroImg src={ImgHero} alt='Image moto HarleyD'/>
        <Styled.ContainerTextHero>
          <Styled.SubtitleHero>New arrivage</Styled.SubtitleHero>
          <Styled.TitleHero>Motos H-D® 2022</Styled.TitleHero>
        </Styled.ContainerTextHero>
      </Styled.Hero>
      {data.map((item:any )=>(
      <CardCategory key={item.id} titleCard={item.subtitle} imgCardCat={item.image} nameBtn={item.title} link={item.id} ></CardCategory>
      ))}    
    </>
  )
}