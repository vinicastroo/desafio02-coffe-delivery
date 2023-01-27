import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductContext'

import illustration from '../../assets/illustration.svg'
import { BorderCard, Card, Icon, SuccessContainer } from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  const { order } = useContext(ProductsContext)

  console.log(order)
  return (
    <SuccessContainer>
      <div>
        <strong>Uhu! Pedido confirmado</strong>
        <span>Agora é só aguardar que logo o café chegará até você</span>

        <BorderCard>
          <Card>
            <div>
              <Icon backgroundColor="purple">
                <MapPin size={20} weight="fill" />
              </Icon>

              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {order?.street}, {order?.number}
                  </strong>
                </p>
                <span>
                  {order?.neighborhood} - {order?.city}, {order?.state}
                </span>
              </div>
            </div>

            <div>
              <Icon backgroundColor="yellow">
                <Timer size={20} weight="fill" />
              </Icon>

              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <Icon backgroundColor="dark_yellow">
                <CurrencyDollar size={20} weight="fill" />
              </Icon>

              <div>
                <p>Pagamento na entrega</p>
                <strong>
                  {order?.method === 'credit' && 'Cartão de Crédito'}
                  {order?.method === 'debit' && 'Cartão de Débito'}
                  {order?.method === 'money' && 'Dinheiro'}
                </strong>
              </div>
            </div>
          </Card>
        </BorderCard>
      </div>
      <img src={illustration} alt="" />
    </SuccessContainer>
  )
}
