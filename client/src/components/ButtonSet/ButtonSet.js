import { Button } from '../index';

const ButtonSet = ({ categories, getLocationsByType, getDescriptionByType }) => {
  return (
      <section className="buttons">
          {categories.map(category => {
            return(<Button key={category.category} title={category.category} color={category.colors.default} getLocationsByType={getLocationsByType} getDescriptionByType={getDescriptionByType} />)
          })}
      </section>
  )
}

export default ButtonSet