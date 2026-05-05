import instagram from "../../assets/images/icons/instagram.png"
import facebook from "../../assets/images/icons/facebook.png"
import twitter from "../../assets/images/icons/twitter.png"
import logo from "../../assets/images/elements/logo.png"
import { Container, Icons, ContainerLogo, Logo } from "./styles"

const Footer = () => (
  <Container>
    <ContainerLogo>
      <Logo src={logo} alt="logo da marca" />
    </ContainerLogo>
    <Icons>
      <img src={instagram} alt="icone instagram" />
      <img src={facebook} alt="icone facebook" />
      <img src={twitter} alt="icone twitter" />
    </Icons>
    <p>O efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.</p>
  </Container>
)

export default Footer