import styled from "styled-components"
import { cores } from "../../styles"

import lixeira from "../../assets/images/elements/lixeira.png"

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;

  &.is-open {
    display: flex;
  }

  .empty-text {
    color: ${cores.secundary};
    line-height: 22px;
    font-weight: bold;
    text-align: center;
    padding: 8px;
  }
`

export const Total = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px 0;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.secundary};
`

export const CardItem = styled.li`
  max-width: 344px;
  background-color: ${cores.secundary};
  display: flex;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img { 
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 0 8px 4px 0;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.primary};
    margin-bottom: 16px;
  }

  p {
    color: ${cores.primary};
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`