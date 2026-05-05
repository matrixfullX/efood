import { Link } from "react-router-dom"
import styled from "styled-components"
import { breakpoints, cores } from "../../styles"

export const ButtonContainer = styled.button`
  width: 286px;
  margin: 0 auto;
  padding: 4px 10px;
  background-color: ${cores.secundary};
  border: none;
  border-radius: 4px;
  color: ${cores.primary};
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    width: 340px;
  }
`

export const ButtonLink = styled(Link)`
  margin: 0 0 8px 8px;
  padding: 4px 10px;
  background-color: ${cores.primary};
  border: none;
  color: ${cores.branco};
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;
  cursor: pointer;
`