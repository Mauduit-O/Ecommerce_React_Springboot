import {useState} from 'react';
import * as Styled from './StyledLogin'
import * as Styles from '../input/SyledInput';
import BtnModal from "../btnModal/BtnModal";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { AUTH_TOKEN_KEY } from '../../App';
import { ErrorMessage } from '@hookform/error-message';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [userInfo, setUserInfo] = useState("");
  const onSubmit = (data: any) => {
    axios
      .post(
        'http://localhost:8082/authenticate',
        data,
        { headers: { 'Content-Type': 'application/json' }}
        
      )
   .then((response) => {
        const bearerToken = response?.headers?.authorization;
        if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
          const jwt = bearerToken.slice(7, bearerToken.length);
          sessionStorage.setItem(AUTH_TOKEN_KEY,jwt)
        }
        setUserInfo(response.data.userName)
    }).catch(error => {
      if(error.status === 401) {
        console.log('Your Username or Password is incorrect. Please try again!');
      } else {
        console.log(error.data);
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        {userInfo && (
          <Styled.RegisterSuccesfull>Bienvenue {userInfo}</Styled.RegisterSuccesfull>
        )}
      <Styled.ContainerInput>
        <Styles.Input 
          {...register("email",{
            required : ' email, ',
          })}  
          type={"text"} placeholder={"Email"}>
        </Styles.Input>
        <Styles.Input 
          {...register("password", {
            required : ' mot de passe, ',
          })} 
          type={"password"} placeholder={"Mot de passe"}>
        </Styles.Input>
        <BtnModal type={"submit"} name="BtnLogin" text={"Se connecter"} className={"btnDark" }></BtnModal>
        {(errors.email, errors.password) && 
            <Styled.ContainerAlertMsg>
              <Styled.AlertMsg> 
                Champ(s) :
                <ErrorMessage errors={errors} name="email" /> 
                <ErrorMessage errors={errors} name="password" /> 
              </Styled.AlertMsg>
              <Styled.AlertMsg>vide(s)</Styled.AlertMsg>
            </Styled.ContainerAlertMsg>
          }
      </Styled.ContainerInput>
    </form>
  )
}