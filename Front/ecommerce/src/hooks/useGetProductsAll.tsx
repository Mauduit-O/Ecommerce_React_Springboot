import axios from "axios";
import { Product } from "../interface/ProductInterface";

export function useGetProductsAll() {
  
  return (): Promise<Product[]> => {
    return axios.get(`http://localhost:8082/product`      
    ).then(res => res.data )
  }
}