import styled from "styled-components"
import { breakpoints, cores} from "../../styles"

export const ContainerBanner = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 300px;
  margin-top: 180px;
  background-size: cover;
  background-repeat: no-repeat;
  display: block;

  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: center;
  }
`

export const InfosBanner = styled.div`
  max-width: 1350px;
  width: 100%;
  height: 300px;
  position: relative;
  background-color: transparent;
`

export const Flavor = styled.h2`
  position: absolute;
  top: 20px;
  left: 220px;
  color: ${cores.branco};
  font-size: 32px;  
  font-weight: 100;
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
  position: absolute;
  bottom: 20px;
  left: 220px;
  color: ${cores.branco};
`

export const Loading = styled.div`
  position: absolute;
  top: 180px;
  left: 8px;
  color: ${cores.primary};
  background-color: ${cores.tertiary};
  padding: 0 20px;
`