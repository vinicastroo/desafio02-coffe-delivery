import { Container, Products } from './styles'

import { useContext } from 'react'
import { CardProduct } from './Product'
import { ProductsContext } from '../../../../context/ProductContext'

export function ListProducts() {
  const { products } = useContext(ProductsContext)

  return (
    <Container>
      {products && products.length > 0 && (
        <>
          <h1>Nossos Cafés</h1>

          <Products>
            {products?.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </Products>
        </>
      )}
    </Container>
  )
}
