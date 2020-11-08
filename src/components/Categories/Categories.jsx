import React from 'react';

const Categories = ({items, setCurrentCategory, activeCategory}) =>{
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => setCurrentCategory(null)}
          className={activeCategory === null ? 'active' : ''}
        >Все</li>
        { items &&
        items.map((item, index) => <li
          onClick={() => setCurrentCategory(index)}
          key={item}
          className={activeCategory === index ? 'active' : ''}
        >{item}</li>)
        }
      </ul>
    </div>
  )
}

export default React.memo(Categories)
