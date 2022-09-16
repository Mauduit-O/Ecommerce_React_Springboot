import React, { useState } from "react";
import InfosUser from "./InfosUser";
import * as Styled from './StyledModalMenu';
import IconClose from '../../assets/icon/close.svg'

interface ModalProps {
  modalT: boolean;
  setModalT?: false;
}

export default function ModalMenu(props: ModalProps): JSX.Element {
  const {modalT, setModalT} = props;

  const toggleModal = () => {
    {setModalT}(!modalT);
  };

  return (
    <>
      {modalT && (
        <Styled.Overlay>
          <Styled.ContentModal>
            <Styled.ModalTop>
              <Styled.IconClose src={IconClose} alt="Icon close" onClick={toggleModal} />
            </Styled.ModalTop>
            <Styled.Menu >
              <Styled.ContentMenu>
                <Styled.MenuLink href="/">Accueil</Styled.MenuLink>
                <Styled.MenuLink href="">Motos</Styled.MenuLink> 
                <Styled.MenuLink href="">Vélo Electrique</Styled.MenuLink> 
              </Styled.ContentMenu>

              <InfosUser />
            </Styled.Menu>
          </Styled.ContentModal>
        </Styled.Overlay>
      )}
    </>
  );
}