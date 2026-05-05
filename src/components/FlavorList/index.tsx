import { useParams } from "react-router-dom"
import { useGetRestaurantByIdQuery } from "../../services/api"

import { Container, Itens } from "./styles"

import Flavor from "../Flavor"

import { Message } from "../../styles"

const FlavorList = () => {
  const { id } = useParams()
  const { data: foods } = useGetRestaurantByIdQuery(id!)

  if (!id) return <Message>Id Não Encontrado</Message>

  return (
    <Container>
      <Itens>
        {foods?.cardapio?.map((food) => (
          <Flavor
            key={food.id}
            titulo={food.nome}
            id={food.id}
            foto={food.foto}
            nome={food.nome}
            descricao={food.descricao}
            preco={food.preco}
            porcao={food.porcao}
          />
        ))}
      </Itens>
    </Container>
  )
}

export default FlavorList