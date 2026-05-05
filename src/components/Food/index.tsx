import star from "../../assets/images/elements/star.png"
import Button from "../Button";

import { CardContainer, Description, Dish, IconStar, Infos, Labels, Notice, Tag, Title } from "./styles"

type Props = {
  id: number
  capa: string
  destacado: boolean
  tipo: string
  titulo: string
  avaliacao: number
  descricao: string
}

const Food = ({ id, capa, destacado, tipo, titulo, avaliacao, descricao}: Props) => (
  <CardContainer className="type">
    <div key={id}>
      <Dish src={capa} />
      <Labels>
      {destacado && <Tag>{destacado} destaque da semana</Tag>}
      {tipo && <Tag>{tipo}</Tag>}
      </Labels>
      <Infos>
        <Title>{titulo}</Title>
        <Notice>{avaliacao}</Notice>
        <IconStar src={star} alt="Estrela de Avaliação" />
      </Infos>
      <Description>{descricao}</Description>
      <Button type="link" to={`/flavors/${id}`} children="Saiba Mais" />
    </div>
  </CardContainer>
)

export default Food