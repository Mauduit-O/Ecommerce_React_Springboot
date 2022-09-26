import React, {useEffect, useState} from 'react'
import * as Styled from './StyledRegister';
import AlertMsg from '../alerMsg/AlertMsg';
import BtnModal from '../btnModal/BtnModal';
import { AUTH_TOKEN_KEY } from '../../App';
import axios from 'axios';
import * as Styles from '../input/SyledInput';
import { useForm } from "react-hook-form";

export default function Register() {

    // const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    //   // let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //   console.log("test")

    //   if(password!=confPassword){
    //       const pwdDif ="Les mots de passe ne sont pas identique";
    //       alert("Les mots de passe ne sont pas identique");
    //   } else{
    //       // display alert box with user
    //       // 'name' and 'email' details .
    //     alert('Bienvenue chez HarleyD');
    //   }
    //     e.preventDefault();
    // }

    const { register, handleSubmit } = useForm();
    const [user, setUser] = useState("");

    const [token, setToken] = useState([]);
    
    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //   const items = JSON.parse(localStorage.getItem('items'));
    //   if (items) {
    //    setItems(items);
    //   }
    // }, []);
   
    const onSubmit = (data: any) => {
      // const token = sessionStorage.getItem(AUTH_TOKEN_KEY)
      // token = JSON.parse(sessionStorage.getItem('data'));
      axios
       .post(
          'http://localhost:8082/users',
           data,
           { headers: { 'Authorization': `bearer ${token}`}}
          //  { headers: { 'Content-Type': 'application/json' }}
        )
       .then(response => {
        console.log(response.data);
        const bearerToken = response?.headers?.authorization;
      
        console.log(bearerToken);
        console.log(response?.headers);
        console.log(response?.headers?.authorization);
        
        if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
          const jwt = bearerToken.slice(7, bearerToken.length);
          sessionStorage.setItem(AUTH_TOKEN_KEY,jwt)
          console.log(jwt);
          console.log('je suis la');
          
        }
        setUser(response.data.firstname)
        console.log(bearerToken);
        console.log(AUTH_TOKEN_KEY);
        console.log(sessionStorage);
        console.log(response.data)
        console.log(response.data.lastname)
      })
       .catch(error => {console.log(error.data)});
  };


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.ContainerForm>
          {user && (
            <p>Bienvenue {user}</p>
          )}
          
          <Styled.ContainerInput>
            <Styled.ContainerShortInput>
              <Styles.Input className={"shortInput"} {...register("lastname")} placeholder={"Nom *"}/>
              <Styles.Input className={"shortInput"}  {...register("firstname")} placeholder={"Prenom *"} /> 
            </Styled.ContainerShortInput>
            <div><Styles.Input type={"text"} {...register("email")} placeholder=" email" /></div>
            <div><Styles.Input  type={"text"} {...register("street")} placeholder={"Adresse *"} /></div>
      
            <Styled.ContainerShortInput>
              <Styles.Input className={"shortInput"} type={"text"} {...register("city")}  placeholder={"Ville *"} />
              <Styles.Input className={"shortInput"} type={"number"} {...register("postal_code")}  placeholder={"Code Postal *"} />
            </Styled.ContainerShortInput>
    
            <Styled.ContainerShortInput>
              <Styles.Input className={"shortInput"} type={"text"} {...register("country")}  placeholder={"Pays *"} />
              <Styles.Input className={"shortInput"} type={"number"} {...register("phone")}  placeholder={"Téléphone *"} />
            </Styled.ContainerShortInput>
       
            <div><Styles.Input type={"password"} {...register("password")} placeholder={"Mot de passe *"}/></div>
            {/* <div><Styles.Input type={"password"} {...register("confPassword")}  placeholder={"Répéter votre mot de passe *"} /></div> */}
            <AlertMsg/>
          </Styled.ContainerInput>
          <Styled.ContainerBtn>
          <BtnModal name={"btnRegister"} text={"Créer mon compte"} className={"btnDark" }></BtnModal>
          </Styled.ContainerBtn>
        </Styled.ContainerForm>
      </form>
    </div>
  )
}