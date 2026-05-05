import styled from "styled-components"
import { breakpoints, cores } from "../../styles"

export const Card = styled.div`
  background-color: ${cores.primary};
  padding: 6px;
`

export const Capa = styled.img`
  max-width: 304px;
  width: 100%;
  height: 167px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 350px;
    height: 200px;
  }
`

export const Titulo = styled.h3`
  margin: 8px 0;
  color: ${cores.secundary};
  font-size: 16px;
  font-weight: bold;
`

export const Descricao = styled.p`
  color: ${cores.secundary};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 8px;
  min-height: calc(22px * 8);
`