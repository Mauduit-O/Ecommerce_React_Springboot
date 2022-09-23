import { useEffect, useState } from 'react';
import CardProduct from '../../component/cardProduct/CardProduct';
import * as Styled from './StyledProductsPage';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { SelectSubCategory } from '../../component/select/Select';


export default function ProductsPage()  {
  const [data, setData] = useState<any>([]);
  const { id } = useParams();  

  const fetchData = async () => {
    await axios 
    .get('/productById'+id+'', {
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
      <SelectSubCategory></SelectSubCategory>
      <Styled.Container>
        {data.map((item:any )=>(
          <CardProduct key={item.id} title={item.title} price={item.price} image={item.image} />
        ))} 
      </Styled.Container>
    </>
  )
}