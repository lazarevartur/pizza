import {SET_PIZZAS, SET_PIZZAS_LOADER} from "../type";

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items
})
export const setPizzasLoader = (boolean) => ({
  type: SET_PIZZAS_LOADER,
  payload: boolean
})