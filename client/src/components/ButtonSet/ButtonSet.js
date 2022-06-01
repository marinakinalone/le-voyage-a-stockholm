// import { Button } from '../index';
import { useState } from 'react';

const ButtonSet = ({ categories, getLocationsByType, getDescriptionByType, setActiveMarker }) => {
  const [activeCategory, setActiveCategory] = useState(false);

  const handleChangeDisplay = (title) => {
    getLocationsByType(title);
    getDescriptionByType(title);
    setActiveMarker(false);
    setActiveCategory(title);
}

  return (
      <section className="buttons">
          {categories.map(category => {
            if (activeCategory === category.category) {
              return(<button className="buttons__btn" style={{backgroundColor: category.colors.default, boxShadow: "-3px -3px 0px 0px black", transform: "translate(2px, 2px)"}} onClick={() => handleChangeDisplay(category.category)}>{category.category}</button>)
            }
            return(<button className="buttons__btn" style={{backgroundColor: category.colors.default}} onClick={() => handleChangeDisplay(category.category)}>{category.category}</button>)
          })}
      </section>
  )
}

export default ButtonSet