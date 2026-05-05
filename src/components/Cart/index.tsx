import { useDispatch, useSelector } from "react-redux"
import { close, remove } from "../../store/reducers/cart"
import Button from "../Button"
import { CardContainer, CardItem, Overlay, Total } from "./styles"
import { SideBar } from "../../models/stylesSideBar"

import type { RootReducer } from "../../store"
import { formataPreco } from "../../utils/formataPreco"
import { useState } from "react"
import Delivery from "../Checkout"

const Cart = () => {
  const [ openDelivery, setIsOpenDelivery ] = useState(false)
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  
  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorTotal) => {
      return (acumulador += valorTotal.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
  <CardContainer className={isOpen ? 'is-open' : ''}>
    <Overlay onClick={closeCart} />
    <SideBar>
      {items.length > 0 ? (
        <>
          <ul>
          {items.map((item) => (
            <CardItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>{formataPreco(item.preco)}</p>
                </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CardItem>
          ))}
        </ul>
        <Total>Valor Total <span>{formataPreco(getTotalPrice())}</span></Total>
        <Button onClick={() => setIsOpenDelivery(true)} type="button">Continuar com a entrega</Button>
        </>
      ) : (
        <>
          <p className="empty-text">Carrinho está vazio.</p>
          <p className="empty-text">adicione pelo menos um prato ao carrinho para continar com o pedido</p>
        </>
      )}
    </SideBar>
    {openDelivery && (
      <Delivery
        onClose={() => setIsOpenDelivery(false)}
      />
    )}
  </CardContainer>
)
}

export default Cart