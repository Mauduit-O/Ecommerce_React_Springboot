import * as Styled from '../Modal/StyledModal';

export default function MenuM() {

  return (
    <Styled.Menu >
    <Styled.ContentMenu>
      <Styled.MenuLink href="/">Accueil</Styled.MenuLink>
      <Styled.MenuLink href="">Motos</Styled.MenuLink> 
      <Styled.MenuLink href="">Vélo Electrique</Styled.MenuLink> 
    </Styled.ContentMenu>
    {/* <InfosUser /> */}
  </Styled.Menu>
  )
}
