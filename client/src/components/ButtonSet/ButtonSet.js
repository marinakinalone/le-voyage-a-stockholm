import React from 'react'
import { Button } from '../index';

const ButtonSet = ({ typesInfo, getLocationsByType, getDescriptionByType }) => {
  return (
      <section className="buttons">
          {typesInfo.map(type => {
            return(<Button key={type.type } title={type.type} color={type.colors.default} getLocationsByType={getLocationsByType} getDescriptionByType={getDescriptionByType} />)
          })}
      </section>
  )
}

export default ButtonSet