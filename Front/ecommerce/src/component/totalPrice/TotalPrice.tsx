import * as Styled from './StyledTotalPrice';
import { useCart } from 'react-use-cart';

export default function TotalPrice() {
  const {
    cartTotal,
} = useCart();

  return (
    <Styled.ContainerTotal>
      <p>Total :</p>
      <p>{cartTotal} €</p>
    </Styled.ContainerTotal>
  )
}
