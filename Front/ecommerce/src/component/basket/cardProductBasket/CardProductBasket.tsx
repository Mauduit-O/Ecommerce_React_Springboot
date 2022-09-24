import * as Styled from './StyledCardProductBasket'

export default function CardProductBasket() {
  return (
    <Styled.ContainerProduct>
      <Styled.ContainerProductInfos>
        <div>
          <Styled.Link href=""><Styled.TitleProduct>Titre</Styled.TitleProduct></Styled.Link>
          <Styled.SubtitleProduct>Feuille d'or</Styled.SubtitleProduct>
        </div>
        <div>
          <Styled.Quantity type="number" id="" name="inputQuantity" min="1" max="10" placeholder="0"value="" />
        </div>
      </Styled.ContainerProductInfos>
      <Styled.ContainerProductPrice>
        <Styled.DeleteProduct type="submit" name="btnDelete"value="">Supprimer</Styled.DeleteProduct>
        <Styled.ProductPrice>€</Styled.ProductPrice>
      </Styled.ContainerProductPrice>
  </Styled.ContainerProduct>
  )
}
