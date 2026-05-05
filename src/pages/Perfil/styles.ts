import styled from "styled-components"
import { Link } from "react-router-dom"
import { breakpoints, cores } from "../../styles"

export const Infos = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 64px;
  position: absolute;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 700px;
  }
`

export const Info = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.primary};
`

export const CartButton = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.primary};
  cursor: pointer;
`