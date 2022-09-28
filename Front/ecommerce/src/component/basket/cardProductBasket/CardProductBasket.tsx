import * as Styled from './StyledCardProductBasket';
import { useCart } from 'react-use-cart';

interface ProductsBasket  {
  id: string,
  title: string,
  subtitle: string,
  price: number,
  image: string,
  souscat: string,
  quantity: number,
  isDeleted: () => void,
  isUpdatedAdd: () => void,
  isUpdatedLess: () => void,
}

export default function CardProductBasket(props: ProductsBasket): JSX.Element {
  const {id, title, subtitle, price, image, souscat, isDeleted, isUpdatedAdd, isUpdatedLess, quantity} = props;

  return (
    <Styled.ContainerProduct>
      <Styled.ContainerProductInfos>
        <div>
          <Styled.Link href=""><Styled.TitleProduct>{title}</Styled.TitleProduct></Styled.Link>
          <Styled.SubtitleProduct>{subtitle}</Styled.SubtitleProduct>
        </div>
        <Styled.ContainerQuantity>
          <Styled.BtnQuantity onClick={isUpdatedLess} >-</Styled.BtnQuantity>
          <Styled.BtnQuantity onClick={isUpdatedAdd}>+</Styled.BtnQuantity>
          <Styled.Quantity type="number" id={id} name="inputQuantity" min="1" max="10" value={quantity} readOnly/>
        </Styled.ContainerQuantity>
      </Styled.ContainerProductInfos>
      <Styled.ContainerProductPrice>
        <Styled.DeleteProduct onClick={isDeleted} type="submit" name="btnDelete"value="">Supprimer</Styled.DeleteProduct>
        <Styled.ProductPrice>{price}€</Styled.ProductPrice>
      </Styled.ContainerProductPrice>
  </Styled.ContainerProduct>
  )
}
