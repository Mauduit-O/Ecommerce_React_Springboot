// import React, { useState } from "react";
import * as Styled from './modalMenu/StyledModalMenu';
import IconClose from '../../assets/icon/close.svg';
import ModalMenu from './modalMenu/ModalMenu';
import { ReactNode } from 'react';

interface ModalProps {
  modalT: boolean;
  UpdateSetModal: any;
  children?: ReactNode;
}

export default function Modal(props: ModalProps): JSX.Element {
  const {modalT, UpdateSetModal, children} = props;
 
  const toggleModal = () => {
    UpdateSetModal(!modalT);
  };

  return (
    <>
      {modalT && (
        <Styled.Overlay>
          <Styled.ContentModal>
            <Styled.ModalTop>
              <Styled.IconClose src={IconClose} alt="Icon close" onClick={toggleModal}/>
            </Styled.ModalTop>
            {children}
          </Styled.ContentModal>
        </Styled.Overlay>
      )}
    </>
  );
}