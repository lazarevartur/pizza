import React from 'react'
import {Categories, SortPopup, PizzaBlock} from "../components";
import {useDispatch} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import LoaderPizza from "../components/PizaBlock/LoaderPizza";

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const SortPopupTypes = [
  {name: 'популярности', type: 'popular'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'name'}
]

const Home = ({
                items,
                isPizzaLoad,
                activeCategory,
                activeSort,
                cartItems
              }) => {
  const dispatch = useDispatch()
  const setCurrentCategory = React.useCallback((catIndex) => {
    dispatch(setCategory(catIndex))
  }, [dispatch])
  const setOrderBy = React.useCallback((orderBy) => {
    dispatch(setSortBy(orderBy))
  }, [dispatch])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categories}
          setCurrentCategory={setCurrentCategory}
          activeCategory={activeCategory}
        />
        <SortPopup
          items={SortPopupTypes}
          setOrderBy={setOrderBy}
          activeSort={activeSort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isPizzaLoad ?
          items.map((item) => {
            return <PizzaBlock key={item.id} item={item} cartItems={cartItems} />
          }) :
          Array(10).fill('').map((_, index) => <LoaderPizza key={index}/>)
        }
      </div>
    </div>
  )
}
export default Home