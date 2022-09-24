import * as Styled from './StyledCardProduct';
import IconAddProduct from '../../assets/icon/addBasket.svg';

interface CardProductProps  {
  title: string,
  price: number,
  image: string,
  souscat: string
}

export default function CardProduct(props: CardProductProps): JSX.Element {
const {title, price, image, souscat} = props;

  return (
    <Styled.CardProduct>
      <Styled.CardTop>
        <Styled.Title> {title} {souscat}</Styled.Title>
        <Styled.LinkMore>Détails</Styled.LinkMore>
      </Styled.CardTop>
      <Styled.ContainerImg>
        <Styled.ImgProduct src={require(`../../assets/img/${image}`)} alt="Image produit" />
      </Styled.ContainerImg>

      <Styled.CardBottom>
        <Styled.ContainerInfos>
          <Styled.Price>{price} €</Styled.Price>
        </Styled.ContainerInfos>
        <Styled.ContainerIcons>
          <form method="post">
            <Styled.BtnAdd type="submit" name="btnAdd" value="">	
              <Styled.IconAddBasket src={IconAddProduct} alt="Icon ajout panier" />
            </Styled.BtnAdd>
          </form>		
        </Styled.ContainerIcons>
      </Styled.CardBottom>
    </Styled.CardProduct>
  )
}