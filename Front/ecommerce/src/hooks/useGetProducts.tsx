import axios from "axios";
import { useParams } from "react-router-dom";
import { Product } from "../interface/ProductInterface";

export function useGetProducts() {
  const { id } = useParams();  
  
  return (): Promise<Product[]> => {
      return axios.get(`http://localhost:8082/productById${id}`      
      ).then(res => res.data )
  }
}