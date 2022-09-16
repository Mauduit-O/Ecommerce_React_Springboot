import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function NotFound() {

  const navigate = useNavigate()
  const goHome = () => { 
    navigate('/')
  }

  return (
    <div>
      <h1>Oups, cette page n'existe pas !</h1>
      {/* <button onClick={goHome}></button> */}
      <Button onClick={goHome}>Retourner à l'accueil</Button>
    </div>
  )
}