import { useDispatch } from "react-redux"
import fechar from "../../assets/images/elements/close.png"
import Button from "../Button"
import { Card, Image, Title, Overlay, Close, Infos } from "./styles"
import { add, open } from "../../store/reducers/cart"
import type { MenuItem } from "../../models/food"
import {formataPreco} from "../../utils/formataPreco"

type Props = {
  item: MenuItem
  onClose: () => void
}

const Modal = ({ item, onClose }: Props) => {
  const dispatch = useDispatch()

  const addToCart = (item: MenuItem) => {
    dispatch(add(item))
    dispatch(open())
    onClose()
  }

  return (
  <Overlay>
    <Card key={item.id} className="overlay">
      <Image src={item.foto} alt="pizza marguerida" />
      <Infos>
        <Title>{item.nome}</Title>
        <p>{item.descricao}</p>
        <p>{item.porcao}</p>
        <Button onClick={() => addToCart(item)} type="button">Adicionar ao Carrinho - {formataPreco(item.preco)}</Button>
        <Close onClick={onClose} src={fechar} alt="fechar modal" />
      </Infos>
    </Card>
  </Overlay>
)
}

export default Modal