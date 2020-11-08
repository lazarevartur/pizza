import React from "react";
import {Route} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux";
import {Header} from './components'
import {Cart, Home} from "./pages";
import {fetchPizzas} from "./redux/reducers/piazzas";

function App() {
  const dispatch = useDispatch()
  const {
    items,
    isPizzaLoad,
    activeCategory,
    activeSort,
    totalPrice,
    totalCount,
    cart,
    cartItems

  } = useSelector(({pizzas, filters, cart}) => ({
    items: pizzas.items,
    isPizzaLoad: pizzas.isLoaded,
    activeCategory: filters.category,
    activeSort: filters.sortBy,
    cart,
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount,
    cartItems: cart.items
  }))
  React.useEffect(() => {
    dispatch(fetchPizzas(activeSort,activeCategory))
  }, [dispatch,activeSort,activeCategory])

  return (
    <div className="wrapper">
      <Header price={totalPrice} count={totalCount}/>
      <div className="content">
        <Route exact path='/' render={() => <Home
          items={items}
          isPizzaLoad={isPizzaLoad}
          activeCategory={activeCategory}
          activeSort={activeSort}
          cartItems={cartItems}
        />}/>
        <Route exact path='/cart' render={() => <Cart
          dispatch={dispatch} cart={cart}
        />}/>
      </div>
    </div>
  );
}

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then((res) => {
//       this.props.setPizzas(res.data.pizzas)
//     })
//   }
//
//   render() {
//     return (
//       <div className="wrapper">
//         <Header/>
//         <div className="content">
//           <Route exact path='/' render={() => <Home items={this.props.items}/>}/>
//           {/*<Route exact path='/'>*/}
//           {/*  <Home items={pizzas} />*/}
//           {/*</Route>*/}
//           <Route component={Cart} path='/cart'/>
//         </div>
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items
//   }
// }
// const mapDispatch = {
//   setPizzas,
// }


// export default connect(mapStateToProps, mapDispatch)(App);
export default App;
