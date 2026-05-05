import { useState } from "react"
import { Capa, Card, Descricao, Titulo } from "./styled"

import Button from "../Button"
import Modal from "../Modal/index"

import type { FlavorType } from "../../models/flavor"

type Props = FlavorType

const Flavor = ({ id, foto, nome, descricao, porcao, preco }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Card className="flavor">
        <div>
          <Capa src={foto} alt={nome} />
          <Titulo>{nome}</Titulo>
          <Descricao>{descricao}</Descricao>
          <Button type="button" onClick={() => setIsOpen(true)}>
              Adicionar ao carrinho
          </Button>
        </div>
      {isOpen && (
        <Modal
          item={{
            id,
            foto,
            descricao,
            porcao,
            preco,
            nome
          }}
          onClose={() => setIsOpen(false)} />
        )}
      </Card>
    </>
  )
}

export default Flavor