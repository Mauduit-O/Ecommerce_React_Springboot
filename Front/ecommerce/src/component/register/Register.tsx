import React, {useEffect, useRef, useState} from 'react'
import * as Styled from './StyledRegister';
import AlertMsg from '../alerMsg/AlertMsg';
import Input from '../input/Input';
import ModalForm from '../modalForm/ModalForm';
import BtnModal from '../btnModal/BtnModal';
import { AUTH_TOKEN_KEY } from '../../App';
import axios from 'axios';

import { useForm } from "react-hook-form";

export default function Register() {
  // const [lastname , setLastname] = useState('');
  // const [firstname , setFirstname] = useState('');
  // const [email , setEmail] = useState('');
  // const [street , setStreet] = useState('');
  // const [city , setCity] = useState('');
  // const [postal_code , setPostal_code] = useState('');
  // const [country , setCountry] = useState('');
  // const [phone , setPhone] = useState('');
  // const [password , setPassword] = useState('');
  // const [confPassword , setConfPassword] = useState('');
 
  
  //   const handleLastnameChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
  //     setLastname(e.target.value);
  //     console.log(e.target.value)
  //   }

  //   const handleFirstnameChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
  //     setFirstname(e.target.value);
  //   }

  //   const handleEmailChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
  //     setEmail(e.target.value); 
  //     // return (e.target.value).match(regexMail) ? (alert("bon"),  setEmail(e.target.value) ): alert("pas");
  //     // if(!(e.target.value).match(regexMail)) {
  //     //   alert("pas");
  //     // } else {
  //     //   alert("bon");
  //     // }
  //     // e.preventDefault();
  //   }
    
  //   const handleStreetChange =(e: { target: { value: React.SetStateAction<string>; }; })=>{
  //     setStreet(e.target.value);
  //   }

  //   const handleCityChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
  //     setCity(e.target.value);
  //   }

  //   const handlePostalCodeChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
  //     setPostal_code(e.target.value);
  //   }

  //   const handleCountryChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
  //     setCountry(e.target.value);
  //   }

  //   const handlePhoneChange =(e: { target: { value: React.SetStateAction<string>; }; })=>{
  //     setPhone(e.target.value);
  //   }
    
  //   const handlePasswordChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
  //     setPassword(e.target.value);
  //   }

  //   const handleConfPasswordChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
  //     setConfPassword(e.target.value);
  //   }

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
    const [data, setData] = useState("");

    // handleSubmit = (e: { preventDefault: () => void; }) =>  {
    //   e.preventDefault();
      
    //   axios.post('/api/auth/signup', {
    //     baseURL: 'http://localhost:8082',
    //   }).then((response) => {
    //     let result = response.data
    //      console.log(result)
    //    }).catch(() => {
    //      console.log('error')
    //    })
    //  }

    const onSubmit = (data: any) => {

      // axios
      // .post(
      //    'http://localhost:8082/api/auth/signup',
      //     data,
      //     { headers: { 'Content-Type': 'application/json' }}
      //  )
      // .then(response => {console.log(response.data)})
      // .catch(error => {console.log(error.data)});

      axios
       .post(
          'http://localhost:8082/api/auth/signup',
           data,
           { headers: { 'Content-Type': 'application/json' }}
        )
       .then(response => {
        const bearerToken = response?.headers?.authorization;
        if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
          const jwt = bearerToken.slice(7, bearerToken.length);
          sessionStorage.setItem(AUTH_TOKEN_KEY,jwt)
        }
        
        console.log(response.data)
      })
       .catch(error => {console.log(error.data)});


    // axios.post('/users', {
    //   ...this.state.userData
    // }).then(response => {
    //    const bearerToken = response?.headers?.authorization;
    //    if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
    //      const jwt = bearerToken.slice(7, bearerToken.length);
    //      sessionStorage.setItem(AUTH_TOKEN_KEY,jwt)
    //    }
    //    this.props.setUserInfo(response.data.firstName + " " + response.data.lastName)
    //    this.props.history("/myBooks")
    //  }).catch(() => {
    //    this.setState({ showModal: true })
    //  })
   };

   const myRef = useRef();

  return (
    <div>

      {/* <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("name")} placeholder=" name" />
      <input {...register("username")} placeholder=" username" />
      <input {...register("email")} placeholder=" email" />
      <input {...register("password")} placeholder=" mdp" />
      
      <p>{data}</p>
      <input type="submit" />
    </form> */}



   
        <form onSubmit={handleSubmit(onSubmit)}>
          <Styled.ContainerForm>
            <Styled.ContainerInput>
              <Styled.ContainerShortInput>
                <input className={"shortInput"} {...register("name")} placeholder={"Nom *"}/>
                <input className={"shortInput"}  {...register("username")} placeholder={"UserName *"} /> 
              </Styled.ContainerShortInput>
              <div><input type={"text" } {...register("email")} placeholder=" email" /></div>
              {/* <div><Input  type={"text"} name={"street"} value={street} placeholder={"Adresse *"} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {handleStreetChange(e)}}/></div>
        
              <Styled.ContainerShortInput>
                <Input className={"shortInput"} type={"text"} name={"city"} value={city} placeholder={"Ville *"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleCityChange(e)}} />
                <Input className={"shortInput"} type={"number"} name={"postal_code"} value={postal_code} placeholder={"Code Postal *"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handlePostalCodeChange(e)}}/>
              </Styled.ContainerShortInput>
      
              <Styled.ContainerShortInput>
                <Input className={"shortInput"} type={"text"} name={"country"} value={country} placeholder={"Pays *"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleCountryChange(e)}}/>
                <Input className={"shortInput"} type={"number"} name={"phone"} value={phone} placeholder={"Téléphone *"} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {handlePhoneChange(e)}}/>
              </Styled.ContainerShortInput>
         */}
              <div><input {...register("password")} placeholder={"Mot de passe *"}/></div>
              {/* <div><Input type={"password"} name={"confPassword"} value={confPassword}  placeholder={"Répéter votre mot de passe *"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleConfPasswordChange(e)}}/></div> */}
              <AlertMsg/>
            </Styled.ContainerInput>
            <Styled.ContainerBtn>
            <BtnModal name={"btnRegister"} text={"Créer mon compte"} className={"btnDark" }></BtnModal>
             {/* <Styled.Btn name="btnInscription" type="submit" value="Créer mon compte" />  */}
            </Styled.ContainerBtn>
          </Styled.ContainerForm>
        </form>
      

    </div>
  )
}