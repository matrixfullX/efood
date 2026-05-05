import styled from "styled-components"
import { breakpoints, cores } from "../../styles"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 300px;
`

export const Fundo = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`

export const Info = styled.h3`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: absolute;

  max-width: 700px;
  width: 100%;

  text-align: center;
  padding-top: 175px;
  color: ${cores.primary};
  font-weight: 900;
  font-size: 36px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
    padding: 175px 16px 0 16px;
  }
`