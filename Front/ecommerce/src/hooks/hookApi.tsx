import React, {Fragment, useState, useEffect} from "react";
import axios from 'axios';

interface PathProps {
  path? : string;
}


export default function ApiCategory(props: PathProps): JSX.Element {
  const {path} = props;
  const [data, setData] = useState<any>([]);

  
  const fetchData = async () => {
    await axios 
    .get<PathProps[]>('/category', {
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

  // const fetchData = async () => {
  //   await axios 
  //   .get<PathProps[]>("'/" +{path}+ "'", {
  //     baseURL: 'http://localhost:8082',
  //   })
  //   .then((response) => {
  //     console.log(response)
  //     setData(response.data)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // };

  useEffect(() => {
    fetchData();
  }, [])

  // console.log(data)
  
  return  (
  <Fragment>
    <ul>
      {data.map((item:any )=>(
        <li key={item.id}>
          <p>{item.title}</p>
        </li>
      ))}
    </ul>
  </Fragment>
  )
}