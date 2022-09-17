import * as Styled from './StyledBasket'
import TotalPrice from "../../totalPrice/TotalPrice";
import CardProductBasket from './cardProductBasket/CardProductBasket';
import StyledBtnModal from '../../btnModal/BtnModal';

export default function Panier() {
  return (
    <div>
      <form method="post">
        <Styled.ContainerOverflow>
          <CardProductBasket/>
          <CardProductBasket/>
          <CardProductBasket/>
          <CardProductBasket/>
          <CardProductBasket/>
          <CardProductBasket/>
          <CardProductBasket/>
          <CardProductBasket/>
        </Styled.ContainerOverflow>


        <Styled.BottomBasket>
          <TotalPrice></TotalPrice>

          <Styled.ContainerBtn>
            <StyledBtnModal text='Valider' className='btnDark'/>
          </Styled.ContainerBtn>

          <Styled.ContainerBtn>
            <StyledBtnModal text='Continuer mon shopping' className='btnLight'/>
          </Styled.ContainerBtn>
        </Styled.BottomBasket>

      </form>
    </div>

  )
}
