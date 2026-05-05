import styled from "styled-components"
import { breakpoints, cores } from "../../styles"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-top: 64px;
  padding-bottom: 64px;
  background-color: ${cores.tertiary};
  margin-top: 180px;
`

export const Itens = styled.div`
  max-width: 900px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    padding: 0 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`