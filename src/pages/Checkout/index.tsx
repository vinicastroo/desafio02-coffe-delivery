import { FormCheckout } from './components/FormCheckout'
import { ProductsSelectedCheckout } from './components/ProductsSelectedCheckout'
import { CheckoutContainer } from './styles'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { ProductsContext } from '../../context/ProductContext'
import { useContext } from 'react'

import { useNavigate } from 'react-router-dom'

const newOrderFormValidationSchema = zod.object({
  cep: zod.string(),
  street: zod.string(),
  number: zod.string(),
  city: zod.string(),
  address: zod.string(),
  state: zod.string(),
  neighborhood: zod.string(),
  method: zod.string(),
})
type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>
export function Checkout() {
  const newProductForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      address: '',
      city: '',
      state: '',
      neighborhood: '',
      method: '',
    },
  })

  const { selectedProducts, createNewOrder } = useContext(ProductsContext)
  const navigate = useNavigate()

  const { handleSubmit, watch } = newProductForm

  const method = watch('method')

  function handleCreateNewOrder(data: NewOrderFormData) {
    console.log(method)
    if (method.length === 0) {
      return alert('Selecione um modo de pagamento')
    }

    createNewOrder({ ...data, products: selectedProducts })
    navigate('/success')
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)}>
        <FormProvider {...newProductForm}>
          <FormCheckout />

          <ProductsSelectedCheckout />
        </FormProvider>
      </form>
    </CheckoutContainer>
  )
}
