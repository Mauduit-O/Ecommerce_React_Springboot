import * as Styled from './StyledCardCategory'
import Button from '../../component/Buttons/Button';
import { NavLink } from "react-router-dom";

interface titleCardProps {
  titleCard : string;
  imgCardCat: string;
  nameBtn: string;
  link: string;
}

export default function CardCategory(props: titleCardProps): JSX.Element {
  const {titleCard, imgCardCat, nameBtn, link} = props;
  return (
    <Styled.ContainerCategory>
      <Styled.ContainerCard>
        <Styled.TitleCardCategory>{titleCard}</Styled.TitleCardCategory>
        <NavLink to={'/products/'+link+''}><Button text={nameBtn} className='btnCardCat'></Button></NavLink>
      </Styled.ContainerCard>
      <Styled.CardCategoryImg src={require('../../assets/img/'+imgCardCat+'')} ></Styled.CardCategoryImg>
    </Styled.ContainerCategory>
  )
}