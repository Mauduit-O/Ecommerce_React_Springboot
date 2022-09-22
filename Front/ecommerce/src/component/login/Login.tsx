import React, {useState} from 'react';
import * as Styled from './StyledLogin'
import BtnModal from "../btnModal/BtnModal";
import Input from "../input/Input";
import ModalForm from "../modalForm/ModalForm";

export default function Login() {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
 
  
  const handleEmailChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setEmail(e.target.value); 
    // return (e.target.value).match(regexMail) ? (alert("bon"),  setEmail(e.target.value) ): alert("pas");
    // if(!(e.target.value).match(regexMail)) {
    //   alert("pas");
    // } else {
    //   alert("bon");
    // }
    // e.preventDefault();
  }

  const handlePasswordChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value)
    setPassword(e.target.value);
  }

  // const handleSubmite=(e: React.FormEvent<HTMLFormElement>)=>{
  //   // if(password)
  //   // {
  //   //   const pwdDif ="Les mots de passe ne sont pas identique";
  //   //   alert("Les mots de passe ne sont pas identique");
  //   // }
  //   // else{
  //   //   // display alert box with user
  //   //   // 'name' and 'email' details .
  //     alert('Bienvenue chez HarleyD');
  //     console.log("ds le submit")
  //   // }
  //   // e.preventDefault();
  // }

  const [values, setValues] = useState({
    userName: '',
    password: ''
  });

  const handleSubmit=(evt: React.FormEvent<HTMLFormElement>)=>{
    console.log("test")
  };

  return (
    <ModalForm titleForm={"Connexion"}>
        <form method="post" onSubmit={(e) => {handleSubmit(e)}}>
        <Styled.ContainerInput>
          <Input type={"text"} name={"email"} value={email} placeholder={"Email"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleEmailChange(e)}}></Input>
          <Input type={"password"} name={"password"} value={password} placeholder={"Mot de passe"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e)}></Input>
          <BtnModal type={"submit"} name="BtnLogin" text={"Se connecter"} className={"btnDark" }></BtnModal>
        </Styled.ContainerInput>
        </form>
    </ModalForm>
  )
}

