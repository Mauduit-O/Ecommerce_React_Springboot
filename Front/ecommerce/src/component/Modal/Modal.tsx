// import React, { useState } from "react";
import * as Styled from './modalMenu/StyledModalMenu';
import IconClose from '../../assets/icon/close.svg';
import { ReactNode } from 'react';

interface ModalProps {
  className?: string;
  modalT: boolean;
  UpdateSetModal?: any;
  children?: ReactNode;
  title?: string;
}

export default function Modal(props: ModalProps): JSX.Element {
  const {className, modalT, UpdateSetModal, children, title} = props;
 
  const toggleModal = () => {
    UpdateSetModal(!modalT);
  };

  return (
    <>
      { modalT && (
        <Styled.Overlay className={className}>
          <Styled.ContentModal>
            <Styled.ModalTop>
              <Styled.IconClose src={IconClose} alt="Icon close" onClick={toggleModal}/>
              <Styled.TitleModal>{title}</Styled.TitleModal>
            </Styled.ModalTop>
            {children}
          </Styled.ContentModal>
        </Styled.Overlay>
      )}
    </>
  );
}