import { Badge, HeaderContainer } from './styles'
import logoCoffeDelivery from '../../assets/logo-coffe-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductContext'

export function Header() {
  const { selectedProducts } = useContext(ProductsContext)

  const amountProductsSelected = selectedProducts.length

  return (
    <HeaderContainer>
      <img src={logoCoffeDelivery} alt="" />

      <nav>
        <NavLink to="/" title="Timer" className="location">
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </NavLink>

        <NavLink to="/history" title="Histórico" className="checkout">
          {amountProductsSelected > 0 && (
            <Badge>{amountProductsSelected}</Badge>
          )}
          <ShoppingCart size={24} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
