import {DEL_ALL_PIZZAS, INCREMENT_PIZZA, SET_PIZZA_TO_CART} from "../type";


const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
  toView: []
}
const isEqual = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b)
}
const payloadIsEqual = (prevState, payload) => {
  return prevState.find(({count, ...item}) => isEqual(item, payload))
}
const incrementPizza = (prevState, action) => {
  prevState.find(({count, ...item}, index) => {
    if (isEqual(item, action)) {
      prevState[index].count++
    }
  })
  return prevState
}
const decrementPizza = (arr, action) => {
  arr.find(({count, ...item}, index) => {
    if (isEqual(item, action)) {
      arr[index].count--
    }
  })
  return arr
}
const objToArr = (obj) => {

  return Object.keys(obj).reduce((acc, key, index) => {
    let indexCurrentItems = [obj[key].items][0].map((item, index) => {
      return {...item, currentIndex: index}
    })
    acc.push(indexCurrentItems)
    return acc
  }, [])
}
const itemCount = (prevState) => {
  return prevState ? prevState.items.reduce((acc, pizza) => {
    return acc + pizza.count
  }, 1) : 1
}

const cartReducer = (state = initialState, action) => {
  let prevState
  let itemsCount
  switch (action.type) {
    case SET_PIZZA_TO_CART:
      prevState = state.items[action.payload.id]
      itemsCount = itemCount(prevState)
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? {items: [{...action.payload, count: 1}], itemsCount}
          : payloadIsEqual(prevState.items, action.payload)
            ? {items: [...incrementPizza(prevState.items, action.payload)], itemsCount}
            : {items: [...prevState.items, {...action.payload, count: 1}], itemsCount}
      }
      const arrItems = objToArr(newItems)
      const itemsArr = [].concat.apply([], arrItems)
      const totalCount = itemsArr.reduce((acc, pizza) => {
        return acc + pizza.count
      }, 0)
      const totalPrice = itemsArr.reduce((acc, pizza) => {
        return acc + (pizza.price * pizza.count)
      }, 0)
      return {
        ...state,
        items: newItems,
        totalCount: totalCount,
        totalPrice: totalPrice,
        toView: itemsArr
      }
    case INCREMENT_PIZZA:
      prevState = state.items[action.payload.id].items
      const currItem = state.items[action.payload.id].items[action.payload.indexItem]
      const item = {
        id:action.payload.id,
        imageUrl: currItem.imageUrl,
        name: currItem.name,
        price: currItem.price,
        type: currItem.type,
        size: currItem.size,
        count: currItem.count + 1
      }
      const newState = {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]:{
            ...state.items[action.payload.id],
            items: [
              ...prevState.slice(0,action.payload.indexItem),
              item,
              ...prevState.slice(action.payload.indexItem+1)
            ],
            itemsCount: state.items[action.payload.id].itemsCount + 1
          }
        },
        totalCount: state.totalCount + 1
      }
      //console.log(state)
      console.log(newState)
      return {
        ...newState
      }
    case DEL_ALL_PIZZAS:
      return initialState
    default:
      return state
  }
}
export default cartReducer

// switch (action.type) {
//   case SET_PIZZA_TO_CART:
//     const newItems = {
//       ...state.items,
//       [action.payload.id]: !state.items[action.payload.id]
//         : [...state.items[action.payload.id], action.payload]
//     }
//[...prevState, action.payload]
