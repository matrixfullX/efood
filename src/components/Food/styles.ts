import styled from "styled-components"
import { cores } from "../../styles"

export const CardContainer = styled.div`
  position: relative;
  display: block;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 10px;
  max-width: 417px;
  width: 100%;
  height: 400px;
  height: 100%;
  border: 1px solid ${cores.primary};
`

export const Dish = styled.img`
  position: relative;
  max-width: 417px;
  width: 100%;
  height: 217px;
`

export const Labels = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`

export const Infos = styled.div`
  display: flex;
  position: relative;
`

export const IconStar = styled.img`
  position: absolute;
  max-width: 20px;
  width: 20px;
  height: 20px;
  top: 8px;
  right: 10px;
`

export const Title = styled.h3`
  position: relative;
  display: block;
  margin: 8px 0 16px 8px;
  color: ${cores.primary};
`

export const Notice = styled.p`
  position: absolute;
  max-width: 30px;
  width: 20px;
  height: 20px;
  top: 8px;
  right: 45px;
  color: ${cores.primary};
  font-weight: bold;
  font-size: 18px;
`

export const Description = styled.p`
  font-size: 14px;
  padding: 10px;
  color: ${cores.primary};

  line-height: 1.5;
  min-height: calc(1.5em * 7);
`

export const Tag = styled.span`
  margin: 0 0 0 10px;
  padding: 4px 10px;
  background-color: ${cores.primary};
  border: none;
  color: ${cores.branco};
  font-size: 12px;
  font-weight: bold;
  font-family: sans-serif;
  cursor: default;
`