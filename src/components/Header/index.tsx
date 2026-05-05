import fundo from "../../assets/images/elements/fundo.png"
import Logo from "../Logo"
import { Container, Fundo, Info } from "./styles"

const Header = () => (
  <>
    <Container>
      <Fundo src={fundo} alt="fundo do cabecalho" />
      <Logo />
      <Info>Viva experiências gastronômicas no conforto da sua casa</Info>
    </Container>
  </>
)

export default Header