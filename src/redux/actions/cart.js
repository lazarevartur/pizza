import {
  DEL_ALL_PIZZAS,
  INCREMENT_PIZZA,
  SET_PIZZA_TO_CART,
  DECREMENT_PIZZA,
  DELL_ONE_GROUP,
} from '../type'

export const setPizzaToCart = (pizza) => ({
  type: SET_PIZZA_TO_CART,
  payload: pizza,
})
export const delAllPizzas = () => ({
  type: DEL_ALL_PIZZAS,
  payload: true,
})
export const incPizza = (data) => ({
  type: INCREMENT_PIZZA,
  payload: data,
})
export const decPizza = (data) => ({
  type: DECREMENT_PIZZA,
  payload: data,
})
export const delPizza = (data) => ({
  type: DELL_ONE_GROUP,
  payload: data,
})
