import axios from "axios";
import { User } from "../interface/UserInterface";

export function useGetUser(email: string) {
  
  return (): Promise<any> => {
      return axios.get(`http://localhost:8082/show/${email}`      
      ).then(res => res.data )
  }
}