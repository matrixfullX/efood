import styled from "styled-components"
import { cores } from "../../styles"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  position: relative;
  display: flex;
  border-radius: 12px;
  max-width: 1024px;
  width: 100%;
  max-height: 344px;
  height: 100%;
  background-color: ${cores.primary};
  box-shadow: 0 10px 30px rgba(0,0,0,0.9);
  z-index: 1;

  p {
    color: ${cores.branco};
    padding-top: 16px;
    margin: 0 32px 12px 0;
    font-size: 14px;
    line-height: 22px;
  }
`

export const Image = styled.img`
  border-radius: 12px;
  padding: 24px;
  width: 320px;
  height: 320px;
  margin: 12px 0 12px 12px;
  object-fit: cover;
`

export const Infos = styled.div`
  width: 100%;
  max-height: 100px;
  height: 100%;
`

export const Title = styled.h2`
  padding-top: 38px;
  font-size: 18px;
  color: ${cores.branco};
`

export const Close = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 12px;
  right: 12px;
  cursor: pointer;
`