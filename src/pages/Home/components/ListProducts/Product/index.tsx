import { ShoppingCartSimple } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { ChangeQuantityProductButton } from '../../../../../components/ChangeQuantityProductButton'

import { FooterProduct, Categories, Category, Product, Button } from './styles'

interface ProductProps {
  id: number
  img: string
  types: string[]
  title: string
  description: string
  price: number
  quantity: number
}

interface CardProductProps {
  product: ProductProps
}
export function CardProduct({ product }: CardProductProps) {
  return (
    <Product key={product.id}>
      <img src={product.img} alt="" />

      <Categories>
        {product.types.map((type) => (
          <Category key={type}>{type}</Category>
        ))}
      </Categories>

      <strong>{product.title}</strong>
      <p>{product.description}</p>

      <FooterProduct>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.price)}
        </strong>

        <div>
          <ChangeQuantityProductButton
            id={product.id}
            quantity={product.quantity}
          />
          <Button>
            <NavLink to="/history" title="Histórico">
              <ShoppingCartSimple size={20} weight="fill" />
            </NavLink>
          </Button>
        </div>
      </FooterProduct>
    </Product>
  )
}
