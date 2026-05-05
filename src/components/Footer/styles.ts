import styled from "styled-components"
import { breakpoints, cores } from "../../styles"

export const Container = styled.footer`
  position: relative;
  display: block;
  justify-content: center;
  background-color: #FFEBD9;
  height: 300px;
  
  p {
    max-width: 480px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 50px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    color: ${cores.primary};

    @media (max-width: ${breakpoints.mobileM}) {
      padding: 0 16px;
    }
  }
`

export const ContainerLogo = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin: 0 auto;
`

export const Logo = styled.img`
  display: block;
  position: absolute;
  margin: 0 auto;
  top: 50px;
`

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 12px;
  margin-top: 150px;

  img {
    width: 24px;
    height: 24px;
  }
`