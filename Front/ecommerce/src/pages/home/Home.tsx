import * as Styled from './StyledHome'
import ImgHero from "../../assets/img/hero-moto.jpeg"
import CardCategory from '../../component/cardCategory/cardCategory';

import React, {Fragment, useState, useEffect} from "react";
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState<any>([]);
  
  const fetchData = async () => {
    await axios 
    .get('/category', {
      baseURL: 'http://localhost:8082',
    })
    .then((response) => {
      console.log(response)
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
      <CardCategory key={item.id} titleCard={item.title} imgCardCat={item.image} ></CardCategory>
      ))}    
    </>
  )
}