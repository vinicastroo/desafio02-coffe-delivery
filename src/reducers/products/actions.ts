export enum ActionTypes {
  ADD_ONE_QUANTITY_OF_PRODUCT = 'ADD_ONE_QUANTITY_OF_PRODUCT',
  REMOVE_ONE_QUANTITY_OF_PRODUCT = 'REMOVE_ONE_QUANTITY_OF_PRODUCT',
  CHANGE_QUANTITY_OF_PRODUCT = 'CHANGE_QUANTITY_OF_PRODUCT',
  REMOVE_PRODUCT_SELECTED = 'REMOVE_PRODUCT_SELECTED',
  REMOVE_ALL_PRODUCT_SELECTED = 'REMOVE_ALL_PRODUCT_SELECTED',
}

export function addOneQuantityOfProductAction(id: number) {
  return {
    type: ActionTypes.ADD_ONE_QUANTITY_OF_PRODUCT,
    payload: { id },
  }
}

export function removeOneQuantityOfProductAction(id: number) {
  return {
    type: ActionTypes.REMOVE_ONE_QUANTITY_OF_PRODUCT,
    payload: { id },
  }
}

export function changeQuantityOfProductAction(id: number, quantity: number) {
  return {
    type: ActionTypes.CHANGE_QUANTITY_OF_PRODUCT,
    payload: { id, quantity },
  }
}

export function removeProductSelectedAction(id: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_SELECTED,
    payload: { id },
  }
}

export function removeAllProductSelectedAction() {
  return {
    type: ActionTypes.REMOVE_ALL_PRODUCT_SELECTED,
  }
}
