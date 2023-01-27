import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'

import { Product, productsReducer } from '../reducers/products/reducer'

import {
  addOneQuantityOfProductAction,
  removeOneQuantityOfProductAction,
  changeQuantityOfProductAction,
  removeProductSelectedAction,
  removeAllProductSelectedAction,
} from '../reducers/products/actions'

import cafe1 from '../assets/cafe_1.png'
import cafe2 from '../assets/cafe_2.png'
import cafe3 from '../assets/cafe_3.png'
import cafe4 from '../assets/cafe_4.png'
import cafe5 from '../assets/cafe_5.png'
import cafe6 from '../assets/cafe_6.png'
import cafe7 from '../assets/cafe_7.png'
import cafe8 from '../assets/cafe_8.png'
import cafe9 from '../assets/cafe_9.png'
import cafe10 from '../assets/cafe_10.png'
import cafe11 from '../assets/cafe_11.png'
import cafe12 from '../assets/cafe_12.png'
import cafe13 from '../assets/cafe_13.png'
import cafe14 from '../assets/cafe_14.png'

interface OrderProps {
  cep: string
  street: string
  number: string
  city: string
  address: string
  state: string
  neighborhood: string
  method: string
  products: Product[]
}

interface ProductsContextType {
  products: Product[]
  selectedProducts: Product[]
  addOneQuantityOfProduct: (id: number) => void
  removeOneQuantityOfProduct: (id: number) => void
  removeProductSelected: (id: number) => void
  changeQuantityOfProduct: (id: number, quantity: number) => void
  createNewOrder: (data: OrderProps) => void
  order: OrderProps | null
}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextProviderProps {
  children: ReactNode
}

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [productsState, dispatch] = useReducer(
    productsReducer,
    {
      products: [],
    },
    () => {
      const storedStateASJSON = localStorage.getItem(
        '@coffee-delivery:products-state-1.0.0',
      )

      if (storedStateASJSON) {
        return JSON.parse(storedStateASJSON)
      }

      return {
        products: [
          {
            id: 1,
            img: cafe1,
            types: ['Tradicional'],
            title: 'Expresso Tradicional',
            description:
              'O tradicional café feito com água quente e grãos moídos',
            price: 9.9,
            quantity: 0,
          },
          {
            id: 2,
            img: cafe2,
            types: ['Tradicional'],
            title: 'Expresso Americano',
            description: 'Expresso diluído, menos intenso que o tradicional',
            price: 9.9,
            quantity: 0,
          },
          {
            id: 3,
            img: cafe3,
            types: ['Tradicional'],
            title: 'Expresso Cremoso',
            description: 'Café expresso tradicional com espuma cremosa',
            price: 9.9,
            quantity: 0,
          },
          {
            id: 4,
            img: cafe4,
            types: ['Tradicional', 'Gelado'],
            title: 'Expresso Gelado',
            description: 'Bebida preparada com café expresso e cubos de gelo',
            price: 9.9,
            quantity: 0,
          },
          {
            id: 5,
            img: cafe5,
            types: ['Tradicional', 'Com leite'],
            title: 'Café com Leite',
            description:
              'Meio a meio de expresso tradicional com leite vaporizado',
            price: 9.9,
            quantity: 0,
          },
          {
            id: 6,
            img: cafe6,
            types: ['Tradicional', 'Com leite'],
            title: 'Latte',
            description:
              'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            price: 9.9,
            quantity: 0,
          },
          {
            id: 7,
            img: cafe7,
            types: ['Tradicional', 'Com leite'],
            title: 'Capuccino',
            description:
              'Bebida com canela feita de doses iguais de café, leite e espuma',
            price: 9.9,
            quantity: 0,
          },
          {
            id: 8,
            img: cafe8,
            types: ['Tradicional', 'Com leite'],
            title: 'Macchiato',
            description:
              'Café expresso misturado com um pouco de leite quente e espuma',
            price: 9.9,
            quantity: 0,
          },
          {
            id: 9,
            img: cafe9,
            types: ['Tradicional', 'Com leite'],
            title: 'Mocaccino',
            description:
              'Café expresso com calda de chocolate, pouco leite e espuma',
            price: 9.9,
            quantity: 0,
          },
          {
            id: 10,
            img: cafe10,
            types: ['Especial', 'Com leite'],
            title: 'Chocolate Quente',
            description:
              'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 9.9,
            quantity: 0,
          },
          {
            id: 11,
            img: cafe11,
            types: ['Especial', 'Alcoólico', 'Gelado'],
            title: 'Cubano',
            description:
              'Drink gelado de café expresso com rum, creme de leite e hortelã',
            price: 9.9,
            quantity: 0,
          },
          {
            id: 12,
            img: cafe12,
            types: ['Especial'],
            title: 'Havaiano',
            description: 'Bebida adocicada preparada com café e leite de coco',
            price: 9.9,
            quantity: 0,
          },
          {
            id: 13,
            img: cafe13,
            types: ['Especial'],
            title: 'Árabe',
            description:
              'Bebida preparada com grãos de café árabe e especiarias',
            price: 9.9,
            quantity: 0,
          },
          {
            id: 14,
            img: cafe14,
            types: ['Especial', 'Alcoólico'],
            title: 'Irlandês',
            description:
              'Bebida a base de café, uísque irlandês, açúcar e chantilly',
            price: 9.9,
            quantity: 0,
          },
        ],
      }
    },
  )

  const { products } = productsState

  const [order, setOrder] = useState<OrderProps | null>(() => {
    const storedStateASJSON = localStorage.getItem(
      '@coffee-delivery:order-state-1.0.0',
    )

    if (storedStateASJSON) {
      return JSON.parse(storedStateASJSON)
    }

    return null
  })

  const selectedProducts = products.filter((product) => product.quantity > 0)

  useEffect(() => {
    const stateJSON = JSON.stringify(productsState)

    localStorage.setItem('@coffee-delivery:products-state-1.0.0', stateJSON)
  }, [productsState])

  useEffect(() => {
    if (order) {
      const stateJSON = JSON.stringify(order)

      localStorage.setItem('@coffee-delivery:order-state-1.0.0', stateJSON)
    }
  }, [order])

  function addOneQuantityOfProduct(id: number) {
    dispatch(addOneQuantityOfProductAction(id))
  }

  function removeOneQuantityOfProduct(id: number) {
    dispatch(removeOneQuantityOfProductAction(id))
  }

  function changeQuantityOfProduct(id: number, quantity: number) {
    dispatch(changeQuantityOfProductAction(id, quantity))
  }

  function removeProductSelected(id: number) {
    dispatch(removeProductSelectedAction(id))
  }

  function createNewOrder(data: OrderProps) {
    setOrder(data)
    dispatch(removeAllProductSelectedAction())
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        addOneQuantityOfProduct,
        removeOneQuantityOfProduct,
        changeQuantityOfProduct,
        selectedProducts,
        removeProductSelected,
        createNewOrder,
        order,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
