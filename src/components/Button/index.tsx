import type { ReactNode } from "react"
import { ButtonContainer, ButtonLink } from "./styles"

export type Props = {
  type: "button" | "link" | 'submit'
  children: ReactNode
  to?: string
  onClick?: () => void
}

const Button = ({ type, children, to, onClick }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer type={type} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string}>
      {children}
    </ButtonLink>
  )
}

export default Button