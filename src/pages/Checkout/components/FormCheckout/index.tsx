import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useState } from 'react'

import {
  Buttons,
  Card,
  FormContent,
  HeaderInformationCard,
  HeaderPaymentCard,
  Input,
  Inputs,
} from './styles'
import { useFormContext } from 'react-hook-form'

export function FormCheckout() {
  const [methodPayment, setMethodPayment] = useState('')

  function handleChangeMethodPayment(method: 'debit' | 'credit' | 'money') {
    setMethodPayment(method)
    setValue('method', method)
  }

  const { register, setValue } = useFormContext()

  return (
    <FormContent>
      <strong>Complete seu pedido</strong>

      <Card>
        <HeaderInformationCard>
          <MapPinLine size={20} />
          <div>
            <strong>Endereço de Entrega</strong>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </HeaderInformationCard>

        <Inputs>
          <Input
            type="text"
            placeholder="CEP"
            {...register('cep')}
            size={35}
            required
          />
          <Input
            type="text"
            placeholder="Rua"
            {...register('street')}
            size={100}
            required
          />
          <div>
            <Input
              type="text"
              placeholder="Número"
              {...register('number')}
              size={20}
              required
            />

            <div className="opcional_input">
              <Input
                type="text"
                placeholder="Complemento"
                size={100}
                {...register('address')}
              />
              <span>Opcional</span>
            </div>
          </div>

          <div>
            <Input
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
              required
            />
            <Input
              type="text"
              placeholder="Cidade"
              {...register('city')}
              size={100}
              required
            />
            <Input
              type="text"
              placeholder="UF"
              {...register('state')}
              size={20}
              required
            />
          </div>
        </Inputs>
      </Card>

      <Card>
        <HeaderPaymentCard>
          <CurrencyDollar size={20} />
          <div>
            <strong>Pagamento</strong>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </HeaderPaymentCard>

        <Buttons>
          <button
            type="button"
            className={methodPayment === 'credit' ? 'selectedButton' : ''}
            onClick={() => handleChangeMethodPayment('credit')}
          >
            <CreditCard size={16} />
            Cartão de crédito
          </button>
          <button
            type="button"
            className={methodPayment === 'debit' ? 'selectedButton' : ''}
            onClick={() => handleChangeMethodPayment('debit')}
          >
            <Bank size={16} />
            Cartão de débito
          </button>
          <button
            type="button"
            className={methodPayment === 'money' ? 'selectedButton' : ''}
            onClick={() => handleChangeMethodPayment('money')}
          >
            <Money size={16} />
            Dinheiro
          </button>
        </Buttons>
      </Card>
    </FormContent>
  )
}
