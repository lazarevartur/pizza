import {DEL_ALL_PIZZAS, INCREMENT_PIZZA, SET_PIZZA_TO_CART} from "../type";

export const setPizzaToCart = (pizza) => ({
  type: SET_PIZZA_TO_CART,
  payload: pizza
})
export const delAllPizzas = () => ({
  type: DEL_ALL_PIZZAS,
  payload: true
})
export const incPizza = (data) => ({
  type: INCREMENT_PIZZA,
  payload: data
})