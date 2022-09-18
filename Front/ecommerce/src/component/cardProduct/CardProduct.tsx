import * as Styled from './StyledCardProduct';
import IconAddProduct from '../../assets/icon/addBasket.svg'
import ImgProduct from '../../assets/img/cvo-road-glide-limited.webp'

export default function CardProduct() {
  return (
    <Styled.CardProduct>
      <Styled.CardTop>
        <Styled.Title> Titre produit </Styled.Title>
        <Styled.LinkMore>Détails</Styled.LinkMore>
      </Styled.CardTop>
      <Styled.ContainerImg>
        <Styled.ImgProduct src={ImgProduct} alt="Image produit" />
      </Styled.ContainerImg>

      <Styled.CardBottom>
        <Styled.ContainerInfos>
          <Styled.Price>14000 €</Styled.Price>
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
