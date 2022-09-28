import * as Styled from './StyledBasket'
import TotalPrice from "../totalPrice/TotalPrice";
import CardProductBasket from './cardProductBasket/CardProductBasket';
import StyledBtnModal from '../btnModal/BtnModal';
import {useCart} from 'react-use-cart'
import { useState } from 'react';
import ModalForm from '../modalForm/ModalForm';

export default function Basket() {
  const [openOrder, setOpenOrder] = useState<boolean>(false);

  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal
} = useCart();

const Submit = (e: any) => {
  e.preventDefault();
  localStorage.removeItem("react-use-cart");
}

const closeModal = () => {
  window.location.reload();
  setOpenOrder(false);
}

  return (
    <div>
      <Styled.BasketIsEmpty>{isEmpty ? 'Votre panier est vide' : ' '}</Styled.BasketIsEmpty>
            <form onSubmit={Submit}>
            <Styled.ContainerOverflow >
            {items.map((item, index)=>{
              return(
              <CardProductBasket key={index}
                isDeleted={() => removeItem(item.id)} id={''}
                title={item.title} subtitle={item.subtitle} price={item.price} image={''} souscat={''}
                quantity={item.quantity} 
                isUpdatedLess={()=> updateItemQuantity(item.id, item.quantity - 1)}    
                isUpdatedAdd={()=> updateItemQuantity(item.id, item.quantity + 1)}            
                />
            )})}
            </Styled.ContainerOverflow>
    
            {!isEmpty && (
              <Styled.BottomBasket>
                <TotalPrice></TotalPrice>
      
                <Styled.ContainerBtn onClick={()=>setOpenOrder(true)}>
                  <StyledBtnModal text='Valider' className='btnDark'/>
                </Styled.ContainerBtn>
      
                <Styled.ContainerBtn>
                  <StyledBtnModal text='Continuer mon shopping' className='btnLight'/>
                </Styled.ContainerBtn>
              </Styled.BottomBasket>
            )}
          </form>    

          {openOrder && (
          <ModalForm titleForm={'Commande confirmée'} onClick={closeModal}>
              <Styled.ContainerOder>
                <div className="container-confirm">
                  <div className="container-confirm-body">	

                    <Styled.MsgConfirm>
                      Votre commande d'un 
                      <strong>total</strong> 
                      de {cartTotal} € est validée. Vous pouvez télécharger la
                      <strong> facture</strong> de votre commande dans votre espace personnel, dans la rubrique 
                      <strong> Mon historique de commande.</strong> 
                      <br/>
                    </Styled.MsgConfirm>

                    <Styled.MsgEnd>Merci, à bientôt !</Styled.MsgEnd>
                  </div>
                </div>
              </Styled.ContainerOder>
          </ModalForm>
          )}
    </div>
  )
}
