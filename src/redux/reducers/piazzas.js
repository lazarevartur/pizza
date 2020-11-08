import axios from "axios";
import {setPizzas, setPizzasLoader} from "../actions/pizzas";
import {SET_PIZZAS, SET_PIZZAS_LOADER} from "../type";

const initialState = {
  items: [],
  isLoaded: false
}

export const fetchPizzas = (activeSort, activeCategory) => (dispatch) => {
  const category = activeCategory !== null ? `category=${activeCategory}` : ''
  const url = `http://localhost:3004/pizzas/?_sort=${activeSort}&_order=asc&${category}`
  dispatch(setPizzasLoader(false))
  axios.get(url).then(({data}) => {
    dispatch(setPizzas(data))
  })
}

const pizzas = (state = initialState, action) => {
  if (action.type === SET_PIZZAS) {
    return {
      ...state,
      items: action.payload,
      isLoaded: true
    }
  }
  if (action.type === SET_PIZZAS_LOADER) {
    return {
      ...state,
      isLoaded: action.payload
    }
  }
  return state
}
export default pizzas