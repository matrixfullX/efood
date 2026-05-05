import styled from "styled-components"
import { cores } from "../styles"
import { ButtonContainer } from "../components/Button/styles"

export const Container = styled.div`
  ${ButtonContainer} {
    margin-bottom: 8px;
  }

  .marginBotton {
    margin-bottom: 24px;
  }

  .small {
    max-width: 86px;
  }

  .average {
    max-width: 155px;
  }
`

export const SideBar = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 360px;
  width: 100%;
  height: 100%;
  padding: 32px 8px 0 8px;
  background-color: ${cores.primary};
  z-index: 1;
  max-height: 100vh;
  overflow-y: auto;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    margin-bottom: 16px;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.secundary};
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 344px;

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.secundary};
    margin: 8px 0;
    width: 344px;
  }
  
  input {
    padding: 6px 8px;
    background-color: ${cores.secundary};
    border: 1px solid ${cores.secundary};
    width: 344px;
  }

  span {
    margin-top: 8px;
    color: ${cores.branco};
  }
`

export const InputDouble = styled.div`
  display: flex;
  justify-content: space-between;
  
  label {
    max-width: 155px;
    width: 100%;
  }
  
  input {
    max-width: 155px;
    width: 100%;
  }
`

export const InputPriority = styled(InputGroup)`
  max-width: 228px;
  width: 100%;

  label {
    max-width: 228px;
    width: 100%;
  }
  
  input {
    max-width: 228px;
    width: 100%;
  }
`

export const Message = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.secundary};
  margin-bottom: 16px;
`