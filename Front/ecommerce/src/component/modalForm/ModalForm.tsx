import * as Styled from './StyledModalForm';
import IconClose from '../../assets/icon/close.svg';
import { ReactNode } from 'react';

interface FormProps {
  children?: ReactNode;
  titleForm: string;
}

export default function Register(props: FormProps): JSX.Element {
  const {children, titleForm} = props;
  return (
    <div>
      <Styled.ModalBackground>
        <Styled.ContainerModalForm>
          <Styled.ContainerIconClose>
            <Styled.IconClose alt="Icon fermer" src={IconClose} />
          </Styled.ContainerIconClose>
          <Styled.TitleModal>{titleForm}</Styled.TitleModal>		
          <Styled.ContentModal>
            {children}
          </Styled.ContentModal>
          
        </Styled.ContainerModalForm>
      </Styled.ModalBackground>	
    </div>
  )
}
