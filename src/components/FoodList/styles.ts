import styled from "styled-components"
import { breakpoints, cores } from "../../styles"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-top: 64px;
  padding-bottom: 64px;
  background-color: ${cores.tertiary};

  @media (max-width: ${breakpoints.tablet}) {
    display: grid;
    padding: 32px;
  }
`

export const Itens = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  max-width: 900px;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr;
  }
`