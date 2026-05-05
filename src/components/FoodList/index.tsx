import { useGetFeaturedFoodQuery } from "../../services/api"

import { Container, Itens } from "./styles"
import { Message } from "../../styles"

import Food from "../Food"

const FoodList = () => {
  const { data: foods, isLoading, error } = useGetFeaturedFoodQuery()

  if (isLoading) return <Message>Carregando ...</Message>
  if (error) return <Message>Error</Message>

  return (
    <Container> 
      <Itens>
        {foods?.map((food) => (
          <Food
            key={food.id}
            id={food.id}
            capa={food.capa}
            destacado={food.destacado}
            tipo={food.tipo}
            titulo={food.titulo}
            avaliacao={food.avaliacao}
            descricao={food.descricao}
          />
        ))}
      </Itens>
    </Container>
  )
}

export default FoodList