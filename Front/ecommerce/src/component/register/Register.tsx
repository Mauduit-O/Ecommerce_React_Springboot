import { useState } from 'react'
import * as Styled from './StyledRegister';
import AlertMsg from '../alerMsg/AlertMsg';
import BtnModal from '../btnModal/BtnModal';
import { AUTH_TOKEN_KEY } from '../../App';
import axios from 'axios';
import * as Styles from '../input/SyledInput';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

interface FormInputs {
  lastname: string,
  firstname: string,
  email: string,
  street: string,
  city: string,
  postal_code: string,
  country: string,
  phone: string,
  password: string,
  confPassword: string
}

export default function Register() {

  const { register, watch, formState: { errors }, handleSubmit} = useForm<FormInputs>();
  const password = watch('password');
  const [user, setUser] = useState("");

  const onSubmit=(data: FormInputs)=>{
    axios
      .post(
      "http://localhost:8082/users",
          data,
      )
    .then(response => {
      const bearerToken = response?.headers?.authorization;
      if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
        const jwt = bearerToken.slice(7, bearerToken.length);
        sessionStorage.setItem(AUTH_TOKEN_KEY,jwt)
      }
      setUser(response.data.firstname)
    })
      .catch(error => {console.log(error.data)});
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <Styled.ContainerForm>
          {user && (
            <Styled.RegisterSuccesfull>Bienvenue {user}</Styled.RegisterSuccesfull>
          )}

          <Styled.ContainerInput>
            <Styled.ContainerShortInput>
              <Styles.Input className={"shortInput"} autoComplete="none"
                {...register("lastname", {
                  required : ' nom, ',
                  minLength: {value: 2, message: " nom (2 caractéres minimum requis),"}
                })} 
                type={"text"}  placeholder={"Nom *"}
              />
              <Styles.Input className={"shortInput"}
                {...register("firstname", {
                  required : ' prenom,', 
                  minLength: {value: 2, message: " prénom (2 caractéres minimum requis),"}
                })}
                type={"text"}  placeholder={"Prenom *"} 
              /> 
            </Styled.ContainerShortInput>
 
            <div><Styles.Input 
              {...register("email", {
                required : ' email,',
                pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: " email ",
                },
              })} 
              type={"text"} placeholder="Email" 
            /></div>
            <div><Styles.Input 
              {...register("street", {
                required : " rue,", 
                minLength: {value: 3, message: " rue (3 caractéres minimum requis), "} 
              })} 
              type={"text"}  placeholder={"Adresse *"} 
            /></div>
      
            <Styled.ContainerShortInput>
              <Styles.Input className={"shortInput"}  
                {...register("city", {
                  required : ' ville,', 
                  minLength: {value: 3, message: " ville (3 caractéres minimum),"} 
                })}  
                type={"text"} placeholder={"Ville *"} 
              />
              <Styles.Input className={"shortInput"}
                {...register("postal_code", {
                  required : ' code postal,', 
                  minLength: {value: 5, message: " code postal (5 caractéres requis),"} , 
                  maxLength: {value: 5, message: " code postal (5 caractéres requis),"} 
                })}
                type={"number"}  placeholder={"Code Postal *"} 
              />
            </Styled.ContainerShortInput>
    
            <Styled.ContainerShortInput>
              <Styles.Input className={"shortInput"} 
                {...register("country", {
                  required : ' pays,',
                  minLength: {value: 3, message: " pays (3 caractéres minimum requis),"} 
                })}  
                type={"text"}  placeholder={"Pays *"} 
              />
              <Styles.Input className={"shortInput"} 
                {...register("phone", {
                  required : ' telephone,', 
                  minLength: {value: 10, message: " telephone (10 caractéres requis),"} , 
                  maxLength: {value: 10, message: " telephone (10 caractéres requis),"} 
                })}
                type={"number"} placeholder={"Téléphone *"} 
              />
            </Styled.ContainerShortInput>
       
            <div><Styles.Input 
              {...register("password", {
                required : ' mot de passe,',
                pattern: {
                  value: /^(?=.*\d)(?=.*[!.@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,5000}$/,
                  message: " mot de passe (requiert une lettre majuscule, minuscule, chiffre et caracteres speciaux (min 8))",
                  },
              })} 
              type={"password"} placeholder={"Mot de passe *"}
            /></div>
            <div><Styles.Input 
              {...register("confPassword",{
                required : ' Veuillez confirmer votre mot de passe,',
                validate: (value) => 
                value === password || "Les mots de passe ne sont pas identiques"
              })}  
              type={"password"} placeholder={"Répéter votre mot de passe *"} /></div>
            <AlertMsg/>
          </Styled.ContainerInput>
          <Styled.ContainerBtn>
          <BtnModal name={"btnRegister"} text={"Créer mon compte"} className={"btnDark" }></BtnModal>
          </Styled.ContainerBtn>

          {(errors.lastname || errors.firstname || errors.email 
            || errors.street || errors.city || errors.postal_code 
            || errors.country || errors.password || errors.phone ) && 
            <Styled.ContainerAlertMsg>
              <Styled.AlertMsg> 
                Champ(s) :
                <ErrorMessage errors={errors} name="lastname" /> 
                <ErrorMessage errors={errors} name="firstname" /> 
                <ErrorMessage errors={errors} name="email" /> 
                <ErrorMessage errors={errors} name="street" /> 
                <ErrorMessage errors={errors} name="city" /> 
                <ErrorMessage errors={errors} name="postal_code" /> 
                <ErrorMessage errors={errors} name="country" /> 
                <ErrorMessage errors={errors} name="phone" /> 
                <ErrorMessage errors={errors} name="password" /> 
              </Styled.AlertMsg>
              <Styled.AlertMsg>invalide(s)</Styled.AlertMsg>
              <Styled.AlertMsg>
                <ErrorMessage errors={errors} name="confPassword" /> 
              </Styled.AlertMsg>
            </Styled.ContainerAlertMsg>
          }
        </Styled.ContainerForm>
      </form>
    </div>
  )
}