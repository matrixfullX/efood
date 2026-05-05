import Footer from "../../components/Footer"
import Logo from "../../components/Logo"
import Banner from "../../components/Banner"
import FlavorList from "../../components/FlavorList"

import { Infos, Info, CartButton } from "./styles"
import { Container, Fundo } from "../../components/Header/styles"

import fundo from "../../assets/images/elements/fundo.png"

import { open } from "../../store/reducers/cart"
import {useDispatch, useSelector} from "react-redux"
import type {RootReducer} from "../../store"

const Perfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
  <>
    <Container>
      <Fundo src={fundo} />
      <Logo />
      <Infos>
        <Info to="/">Restaurantes</Info>
        <CartButton onClick={openCart}>{items.length} produto(s) no carrinho</CartButton>
      </Infos>
      <Banner />
    </Container>
    <FlavorList />
    <Footer />
  </>
)
}

export default Perfil