import * as Styled from './StyledModalForm';
import IconClose from '../../assets/icon/close.svg';
import { ReactNode } from 'react';

interface FormProps {
  children?: ReactNode;
  titleForm: string;
  onClick: ()=> void
}

export default function ModalForm(props: FormProps): JSX.Element {
  const {children, titleForm, onClick} = props;
  return (
    <div>
      <Styled.ModalBackground>
        <Styled.ContainerModalForm>
          <Styled.ContainerIconClose>
            <Styled.IconClose alt="Icon fermer" src={IconClose} onClick={onClick}/>
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
