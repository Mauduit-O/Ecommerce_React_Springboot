import * as Styled from './StyledFooter';
import IconPhone from '../../assets/icon/phone.svg';
import IconTwitter from '../../assets/icon/twitter.svg';
import IconFacebook from '../../assets/icon/facebook.svg';
import IconInstagram from '../../assets/icon/instagram.svg';

export default function Footer() {
  return (
    <Styled.ContainerFooter>
      <Styled.ContainerFooterTop>
        <Styled.FooterTopText>Contacter nos conseillers <Styled.FooterTopSpan>Lun au sam, 10.00-20.00</Styled.FooterTopSpan></Styled.FooterTopText>
        <Styled.BtnPhone>
          <Styled.BtnPhoneImg alt="icon telephone" src={IconPhone}/>
          <Styled.BtnPhoneText>+33  9 75 00 00 00</Styled.BtnPhoneText>
        </Styled.BtnPhone>
      </Styled.ContainerFooterTop>
    
    <Styled.ContainerFooterBody>
      <Styled.FooterBodyUl>
        <Styled.FooterBodyLi>
          <Styled.FooterBodyLink href="">A propos</Styled.FooterBodyLink>
        </Styled.FooterBodyLi>
        <Styled.FooterBodyLi>
          <Styled.FooterBodyLink href="">Contact</Styled.FooterBodyLink>
        </Styled.FooterBodyLi>
        <Styled.FooterBodyLi>
          <Styled.FooterBodyLink href="">Assistance</Styled.FooterBodyLink>
        </Styled.FooterBodyLi>
        <Styled.FooterBodyLi>
          <Styled.FooterBodyLink href="">Boutique</Styled.FooterBodyLink>
        </Styled.FooterBodyLi>
      </Styled.FooterBodyUl>
      <Styled.FooterBodyUl>
        <Styled.FooterBodyLi><Styled.FooterBodyLink  href="">Professionnels</Styled.FooterBodyLink></Styled.FooterBodyLi>
        <Styled.FooterBodyLi><Styled.FooterBodyLink  href="">Recrutement</Styled.FooterBodyLink></Styled.FooterBodyLi>
        <Styled.FooterBodyLi><Styled.FooterBodyLink  href="">Reparation</Styled.FooterBodyLink></Styled.FooterBodyLi>
        <Styled.FooterBodyLi>
          <Styled.IconMedia alt="icon Twitter" src={IconTwitter} />
          <Styled.IconMedia  alt="icon Facebook" src={IconFacebook} />
          <Styled.IconMedia  alt="icon Instagram" src={IconInstagram} />
        </Styled.FooterBodyLi>
      </Styled.FooterBodyUl>
    </Styled.ContainerFooterBody>

    <Styled.FooterBottom>
      <Styled.FooterBottomText>Copyright © 2022 HarleyD - Student project</Styled.FooterBottomText>
    </Styled.FooterBottom>
  </Styled.ContainerFooter>
  )
}

