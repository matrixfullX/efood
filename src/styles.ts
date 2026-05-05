import styled, { createGlobalStyle } from "styled-components"

export const cores = {
  branco: "#fff",
  preto: "#000",
  primary: "#E66767",
  secundary: "#FFEBD9",
  tertiary: "#FFF8F2"
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    text-decoration: none;
    list-style: none;
  }
`

export const Message = styled.div`
  font-size: 24px;
  display: block;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${cores.secundary};
`

export const breakpoints = {
  tablet: '768px',
  mobile: '425px',
  mobileM: '375px'
}

export default GlobalStyle