import { useParams } from "react-router-dom";

import { useGetRestaurantByIdQuery } from "../../services/api";

import { ContainerBanner, Flavor, InfosBanner, Loading, Title } from "./styled";
import { Message } from "../../styles";

const Banner = () => {
  const {id} = useParams()

  const { data: restaurant, isLoading, error } = useGetRestaurantByIdQuery((id!))
  
  if (isLoading) {
    return <Loading>Carregando...</Loading>
  }

  if (!id) return <Message>Id não encontrado</Message>
  if (error) return <Message>Error</Message>

  return (
    <ContainerBanner key={id} style={{backgroundImage :`url(${restaurant?.capa})`}}>
      <InfosBanner>
        <Flavor>{restaurant?.tipo}</Flavor>
        <Title>{restaurant?.titulo}</Title>
      </InfosBanner>
    </ContainerBanner>
  )
}

export default Banner