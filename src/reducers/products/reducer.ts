import { ActionTypes } from './actions'

import { produce } from 'immer'

export interface Product {
  id: number
  img: string
  types: string[]
  title: string
  description: string
  price: number
  quantity: number
}

interface ProductState {
  products: Product[]
}

export function productsReducer(state: ProductState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ONE_QUANTITY_OF_PRODUCT: {
      const currentProductIndex = state.products.findIndex(
        (cycle) => cycle.id === action.payload.id,
      )

      if (currentProductIndex < 0) {
        return state
      }
      const newQuantity = state.products[currentProductIndex].quantity + 1

      return produce(state, (draft) => {
        draft.products[currentProductIndex].quantity = newQuantity
      })
    }

    case ActionTypes.REMOVE_ONE_QUANTITY_OF_PRODUCT: {
      const currentProductIndex = state.products.findIndex(
        (cycle) => cycle.id === action.payload.id,
      )

      if (currentProductIndex < 0) {
        return state
      }

      const newQuantity = state.products[currentProductIndex].quantity - 1

      if (newQuantity < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.products[currentProductIndex].quantity = newQuantity
      })
    }
    case ActionTypes.CHANGE_QUANTITY_OF_PRODUCT: {
      const currentProductIndex = state.products.findIndex(
        (cycle) => cycle.id === action.payload.id,
      )

      if (currentProductIndex < 0) {
        return state
      }

      const newQuantity = action.payload.quantity

      if (newQuantity < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.products[currentProductIndex].quantity = newQuantity
      })
    }
    case ActionTypes.REMOVE_PRODUCT_SELECTED: {
      const currentProductIndex = state.products.findIndex(
        (cycle) => cycle.id === action.payload.id,
      )

      if (currentProductIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.products[currentProductIndex].quantity = 0
      })
    }
    case ActionTypes.REMOVE_ALL_PRODUCT_SELECTED: {
      const newProducts = state.products.map((product) => {
        return { ...product, quantity: 0 }
      })

      return produce(state, (draft) => {
        draft.products = newProducts
      })
    }
    default:
      return state
  }
}
