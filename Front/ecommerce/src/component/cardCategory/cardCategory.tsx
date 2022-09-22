import * as Styled from './StyledCardCategory'
import Button from '../../component/Buttons/Button';
// import CardCatImg from './imgCategory';


interface titleCardProps {
  titleCard : string;
  imgCardCat: string;
}

export default function CardCategory(props: titleCardProps): JSX.Element {
  const {titleCard, imgCardCat} = props;
  return (
    <Styled.ContainerCategory>
      <Styled.ContainerCard>
        <Styled.TitleCardCategory>{titleCard}</Styled.TitleCardCategory>
        <Button text='Motos' className='btnCardCat'></Button>
      </Styled.ContainerCard>
      <Styled.CardCategoryImg src={require('../../assets/img/'+imgCardCat+'')} ></Styled.CardCategoryImg>
    </Styled.ContainerCategory>
  )
}




