import * as Styled from './StyledModal';
import IconClose from '../../assets/icon/close.svg';
import { ReactNode } from 'react';

interface ModalProps {
  className?: string;
  onClick: () => void;
  children: ReactNode;
  title?: string;
}

export default function Modal(props: ModalProps): JSX.Element {
  const {className, children, onClick, title} = props;

  return (
    <>
      <Styled.Overlay className={className}>
        <Styled.ContentModal>
          <Styled.ModalTop>
            <Styled.IconClose src={IconClose} alt="Icon close" onClick={onClick}/>
            <Styled.TitleModal>{title}</Styled.TitleModal>
          </Styled.ModalTop>
          {children}
        </Styled.ContentModal>
      </Styled.Overlay>
    </>
  );
}