import * as Styled from './StyledModalMenu';
import InfosUser from "./InfosUser";
export default function ModalMenu() {
  return (
    <Styled.Menu >
    <Styled.ContentMenu>
      <Styled.MenuLink href="/">Accueil</Styled.MenuLink>
      <Styled.MenuLink href="">Motos</Styled.MenuLink> 
      <Styled.MenuLink href="">Vélo Electrique</Styled.MenuLink> 
    </Styled.ContentMenu>

    <InfosUser />
  </Styled.Menu>
  )
}
