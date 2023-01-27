import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductContext'
import { ChangeQuantityButton } from './styles'

interface ChangeQuantityProductButtonProps {
  id: number
  quantity: number
}
export function ChangeQuantityProductButton({
  id,
  quantity,
}: ChangeQuantityProductButtonProps) {
  const {
    addOneQuantityOfProduct,
    removeOneQuantityOfProduct,
    changeQuantityOfProduct,
  } = useContext(ProductsContext)

  return (
    <ChangeQuantityButton>
      <button onClick={() => removeOneQuantityOfProduct(id)}>
        <Minus size={20} weight="fill" />
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => changeQuantityOfProduct(id, Number(e.target.value))}
        min={0}
      />
      <button onClick={() => addOneQuantityOfProduct(id)}>
        <Plus size={20} weight="fill" />
      </button>
    </ChangeQuantityButton>
  )
}
