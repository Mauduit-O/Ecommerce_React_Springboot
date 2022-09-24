import axios from "axios";
import { useParams } from "react-router-dom";
import { Subcategory } from "../interface/SubcategoryInterface";

export function useGetSubcategory() {
  
  const { id } = useParams();  
  return (): Promise<Subcategory[]> => {
      return axios.get(`http://localhost:8082/selectSubCat${id}`      
      ).then(res => res.data )
  }
}
