import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { ChangeQuantityProductButton } from '../../../../components/ChangeQuantityProductButton'
import { ProductsContext } from '../../../../context/ProductContext'
import {
  Button,
  ButtonGroup,
  Card,
  Price,
  Product,
  ProductInformationContent,
} from './styles'

export function ProductsSelectedCheckout() {
  const { selectedProducts, removeProductSelected } =
    useContext(ProductsContext)

  const initialValue = 0
  const totalItems = selectedProducts.reduce((cost, product) => {
    return cost + product.quantity * product.price
  }, initialValue)

  const deliveryFee = 3.5
  const totalPrice = totalItems + deliveryFee

  return (
    <ProductInformationContent>
      <strong>Cafés selecionados</strong>

      <Card>
        {selectedProducts.length > 0 ? (
          <>
            {selectedProducts.map((product) => (
              <Product key={product.id}>
                <img src={product.img} alt="" />

                <div>
                  <div>
                    <span>{product.title}</span>
                    <strong>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(product.price)}
                    </strong>
                  </div>

                  <ButtonGroup>
                    <ChangeQuantityProductButton
                      id={product.id}
                      quantity={product.quantity}
                    ></ChangeQuantityProductButton>

                    <Button
                      type="button"
                      onClick={() => removeProductSelected(product.id)}
                    >
                      <Trash size={16} />
                      Remover
                    </Button>
                  </ButtonGroup>
                </div>
              </Product>
            ))}
            <Price>
              <div>
                <span>Total de itens</span>
                <span>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(totalItems)}
                </span>
              </div>
              <div>
                <span>Entrega</span>
                <span>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(deliveryFee)}
                </span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(totalPrice)}
                </strong>
              </div>
              <button type="submit">Confirmar pedido</button>
            </Price>
          </>
        ) : (
          <span>Nenhum produto selecionado</span>
        )}
      </Card>
    </ProductInformationContent>
  )
}
