import { useState } from "react"
import { useSelector } from "react-redux"
import { useFormik } from "formik"

import { usePurchaseMutation } from "../../services/api"
import type { RootReducer } from "../../store"

import Button from "../Button"
import * as Yup from "yup"

import { InputPriority, Message, SideBar } from "../../models/stylesSideBar"
import { Container, InputDouble, InputGroup, Title } from "../../models/stylesSideBar"

type Props = {
  onClose: () => void
}

const Checkout = ({ onClose }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [ isOpen, setIsOpen ] = useState(false)
  const [ purchase, { isSuccess, data } ]=  usePurchaseMutation()

  const form = useFormik({
      initialValues: {
        receiver: '',
        description: '',
        city: '',
        zipCode: '',
        number: '',
        complement: '',

        cardName: '',
        numberCard: '',
        cvv: '',
        expiresMonth: '',
        expiresYear: ''
      },
      validationSchema: Yup.object({
      receiver: Yup.string().min(5, 'O nome deve ter no mínimo 5 caracteres').required('nome é obrigatório'),
      description: Yup.string().required('endereço é obrigatório'),
      city: Yup.string().required('cidade é obrigatório'),
      zipCode: Yup.string().min(9, 'o CEP deve ter no mínimo 9 caracteres').required('CEP é obrigatório'),
      number: Yup.number().min(3, 'o número deve ter no mínimo 3 caracteres').required('Número é obrigatório'),
      complement: Yup.string().max(150, 'o campo deve ter no maximo 150 caracteres'),

      cardName: Yup.string().required('o nome do cartão é obrigatório'),
      numberCard: Yup.string().min(15, 'o cartão deve ter no mínimo 15 caracteres').required('o número do cartão é obrigatório'),
      cvv: Yup.number().required('o código do cartão é obrigatório'),
      expiresMonth: Yup.number().required('o mês é obrigatório'),
      expiresYear: Yup.number().required('o ano é obrigatório')
    }),
      onSubmit: (values) => {
        purchase({
          delivery : {
            receiver: values.receiver,
            address: {
              description: values.description,
              city: values.city,
              zipCode: values.zipCode,
              number: Number(values.number),
              complement: values.complement
            }
          },
          payment: {
            card: {
            name: values.cardName,
            number: values.numberCard,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
          products: items.map((item) => ({
            id: item.id,
            price: item.preco
          }))
        })
      }
    }
  )
    const getErrorMessage = (fieldName: string, message?: string) => {
      const isTouched = fieldName in form.touched
      const isInvalid = fieldName in form.errors

      
      if (isTouched && isInvalid) return message
      return ''
    }

  return (
    <Container>
        <SideBar>
              <div className="marginBotton">
              <Title>Entrega</Title>
              <InputGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input 
                  type="text"
                  id="receiver"
                  name="receiver"
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <span>{getErrorMessage('receiver',form.errors.receiver)}</span>
              </InputGroup>
              <InputGroup>
                <label htmlFor="description">Endereço</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={form.values.description}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <span>{getErrorMessage('description', form.errors.description)}</span>
              </InputGroup>
              <InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <span>{getErrorMessage('city', form.errors.city)}</span>
              </InputGroup>
              <InputDouble>
                <InputGroup className="average">
                  <label htmlFor="zipCode">CEP</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <span>{getErrorMessage('zipCode', form.errors.zipCode)}</span>
                </InputGroup>
                <InputGroup className="average">
                  <label htmlFor="number">Número</label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <span>{getErrorMessage('number', form.errors.number)}</span>
                </InputGroup>
              </InputDouble>
              <InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <span>{getErrorMessage('supplement', form.errors.complement)}</span>
              </InputGroup>
            </div>
            <Button type="button" onClick={() => setIsOpen(true)}>Continuar com o pagamento</Button>
            <Button type="button" onClick={onClose}>Voltar para o carrinho</Button>
        </SideBar>
        {isOpen && (
          <SideBar>
          <form onSubmit={form.handleSubmit}>
          <div className="marginBotton">
          <Title>Pagamento - Valor a pagar R$ 190, 90</Title>
          <InputGroup >
            <label htmlFor="cardName">Nome do cartão</label>
            <input
            type="text"
            id="cardName"
            name="cardName"
            value={form.values.cardName}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            />
            <span>{getErrorMessage('cardName', form.errors.cardName)}</span>
          </InputGroup>
          <InputDouble>
            <InputPriority>
              <label htmlFor="numberCard">Número do Cartão</label>
              <input 
              type="text"
              id="numberCard"
              name="numberCard"
              value={form.values.numberCard}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              />
              <span>{getErrorMessage('numberCard', form.errors.numberCard)}</span>
            </InputPriority>
            <InputGroup className="small">
              <label htmlFor="cvv">CVV</label>
              <input 
              type="number"
              id="cvv"
              name="cvv"
              value={form.values.cvv}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              />
              <span>{getErrorMessage('cvv', form.errors.cvv)}</span>
            </InputGroup>
          </InputDouble>
          <InputDouble className="">
            <InputGroup className="overage">
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <input 
              type="number"
              id="expiresMonth"
              name="expiresMonth"
              value={form.values.expiresMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              />
              <span>{getErrorMessage('expiresMonth', form.errors.expiresMonth)}</span>
            </InputGroup>
            <InputGroup className="overage">
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <input 
              type="number"
              id="expiresYear"
              name="expiresYear"
              value={form.values.expiresYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              />
              <span>{getErrorMessage('expiresYear', form.errors.expiresYear)}</span>
            </InputGroup>
          </InputDouble>
        </div>
        <Button type="submit">Finalizar pagamento</Button>
        <Button type="button" onClick={() => setIsOpen(false)}>Voltar para a edição do endereço</Button>
        </form>
        </SideBar>
        )}
        {isSuccess && (
          <SideBar>
            <Title>Pedido realizado - {data.orderId}</Title>
            <Message>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</Message>
            <Message>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. </Message>
            <Message>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</Message>
            <Message>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</Message>
            <Button onClick={onClose} type="button" >Concluir</Button>
          </SideBar>
        )}
    </Container>
  )
}

export default Checkout