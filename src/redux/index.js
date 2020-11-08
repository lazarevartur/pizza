import {  combineReducers } from 'redux';
import pizzasReducer from './reducers/piazzas'
import filtersReducer  from './reducers/filter'
import cartReducer from "./reducers/cart";

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  filters : filtersReducer,
  cart: cartReducer
})
export default rootReducer